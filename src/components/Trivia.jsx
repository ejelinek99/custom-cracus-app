import { useState, useEffect } from 'react'
import {
    Box,
    Button,
    Heading,
    Select,
    Text,
    Center,
    useDisclosure,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
} from '@chakra-ui/react'
import triviaAPI from '../api/triviaAPI'

function Trivia() {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        if (selectedCategory) {
            fetchQuestion(selectedCategory)
        }
    }, [selectedCategory])

    //Calls the API and sets the question and answer from the response
    const fetchQuestion = async categoryId => {
        const response = await triviaAPI.get('/category', {
            params: {
                category: categoryId,
            },
        })
        setQuestion(response.data[0].question)
        setAnswer(response.data[0].answer)
    }

    //Sets the setSelectedCategory with the categoryId, called when category is changed
    const handleCategoryChange = async e => {
        const categoryId = e.target.value
        setSelectedCategory(categoryId)
    }

    //Calls the API whenever Next Question button is clicked
    const handleNextQuestion = () => {
        fetchQuestion(selectedCategory)
    }

    return (
        <Box maxW="600px" mx="auto" my="8">
            <Heading mb="4">Trivia</Heading>
            <Box mb="4">
                <Text>Select a Category:</Text>
                <Select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    focusBorderColor="white"
                >
                    <option value="artliterature">Art/Literature</option>
                    <option value="language">Language</option>
                    <option value="sciencenature">Science/Nature</option>
                    <option value="general">General</option>
                    <option value="fooddrink">Food/Drink</option>
                    <option value="peopleplaces">People/Places</option>
                    <option value="geography">Geography</option>
                    <option value="historyholidays">History/Holidays</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="toysgames">Toys/Games</option>
                    <option value="music">Music</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="religionmythology">
                        Religion/Mythology
                    </option>
                    <option value="sportsleisure">Sports/Leisure</option>
                </Select>
            </Box>
            {question && (
                <Box
                    p="4"
                    bg="whiteAlpha.400"
                    boxShadow="2xl"
                    borderRadius="md"
                >
                    <Center>
                        <Text mb="2">{question}</Text>
                    </Center>
                    <Center>
                        <Button
                            onClick={onOpen}
                            mr={2}
                            color="black"
                            bg="whiteAlpha.700"
                        >
                            Show Answer
                        </Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent bg="#a794e1">
                                <ModalHeader>Answer</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Center>{answer}</Center>
                                </ModalBody>

                                <ModalFooter>
                                    <Button
                                        mr={3}
                                        onClick={onClose}
                                        bg="whiteAlpha.700"
                                        color="black"
                                    >
                                        Close
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <Button
                            onClick={handleNextQuestion}
                            color="black"
                            bg="whiteAlpha.700"
                        >
                            Next question
                        </Button>
                    </Center>
                </Box>
            )}
        </Box>
    )
}

export default Trivia
