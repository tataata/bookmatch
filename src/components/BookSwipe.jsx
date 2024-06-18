import { useState } from 'react';
import { Link } from 'wouter';
import HeaderMenu from './HeaderMenu';

const books = [
    {
        img: "src/images/GatsbyCover.webp",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        match: "87%",
        tags: ["Classic Fiction", "Love", "Wealth", "Tragedy"],
        rating: 4,
        reviews: 1345,
        description: "The Great Gatsby is a novel set in the Roaring Twenties that tells the story of Jay Gatsby, a mysterious millionaire, and his unrequited love for Daisy Buchanan...",
        additionalDetails: {
            pages: "180",
            language: "English",
            author: "F. Scott Fitzgerald was an American novelist, best known for his novel The Great Gatsby. His works illustrate the Jazz Age and the American Dream...",
        },
    },
// {
//     img: "src/images/HarryPotter.jpeg",
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     match: "92%",
//     tags: ["Fantasy", "Magic", "Adventure"],
//     rating: 5,
//     reviews: 2568,
//     description: "Harry Potter and the Sorcerer's Stone is the first book in the Harry Potter series. It follows the story of a young wizard named Harry Potter as he discovers his magical...",
//     additionalDetails: {
//         pages: "320",
//         language: "English",
//         author: "J.K. Rowling is a British author, best known for writing the Harry Potter series. Her books have become a global phenomenon and have been adapted into successful films...",
//     },
// },

];

const BookSwipe = () => {
    const [expandedBooks, setExpandedBooks] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedBooks, setLikedBooks] = useState([]);
    const [dislikedBooks, setDislikedBooks] = useState([]);
    const [library, setLibrary] = useState([]);

    const toggleExpand = (index) => {
        setExpandedBooks(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const handleButtonClick = (index) => {
        toggleExpand(index);
    };

    const handleLike = () => {
        const currentBook = books[currentIndex];
        setLikedBooks([...likedBooks, currentBook]);
        setLibrary([...library, currentBook]);
        moveToNextBook();
    };

    const handleDislike = () => {
        const currentBook = books[currentIndex];
        setDislikedBooks([...dislikedBooks, currentBook]);
        moveToNextBook();
    };

    const moveToNextBook = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    };

    const cardClasses = "w-[500px] relative flex flex-col items-center justify-center bg-white rounded-3xl shadow border border-stone";

    return (
        <>
        <Link href="/menu"></Link>
        <HeaderMenu />
            <div className="flex flex-col items-center justify-center -mt-1">
                <div className="text-center text-black text-4xl font-semibold font-['Poppins'] mb-5">
                    Discover Books
                </div>

        <div className="h-screen">

                {books.map((book, index) => (
                    <div key={index} className={`${cardClasses} ${expandedBooks[index] ? "h-[930px]" : "h-[775px]"}`}>
                        <div className="justify-center items-center inline-flex w-[430px] h-[390px] top-[45px] absolute">
                            <img src={book.img} className="rounded-2xl"/>
                            <div className="top-[390px] absolute px-4 py-1 bg-white rounded-xl border-2 border-yellow justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-black text-lg font-medium font-['Poppins']">Match {book.match}</div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 w-[460px] top-[442px] absolute">
                                <div className="flex flex-col gap-1">
                                    <div className="text-center text-black text-3xl font-semibold font-['Poppins'] mt-1">{book.title}</div>
                                    <div className="text-center text-black text-lg font-medium font-['Lora']">by {book.author}</div>
                                </div>
                                <div className="justify-start items-start gap-2.5 inline-flex">
                                    {book.tags.map((tag, i) => (
                                        <div key={i} className="py-1 px-3 rounded-xl border border-beige justify-center items-center gap-2.5 flex">
                                            <div className="text-center text-black text-sm font-regular font-['Poppins']">{tag}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="justify-start items-center gap-2.5 inline-flex mt-1">
                                    <div className="justify-center items-center gap-1 flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.5461 2.9842C11.7248 2.59678 12.2754 2.59677 12.4541 2.98417L15.1041 8.728L21.3856 9.47328C21.8093 9.52355 21.9795 10.0473 21.6662 10.3369L17.0221 14.631L18.2549 20.8359C18.338 21.2543 17.8926 21.578 17.5202 21.3696L12.0001 18.28L6.48001 21.3704C6.1077 21.5789 5.66219 21.2552 5.74534 20.8367L6.97809 14.632L2.33365 10.3359C2.02047 10.0462 2.19062 9.52259 2.61427 9.47233L8.89709 8.727L11.5461 2.9842Z"
                                                    stroke={i < book.rating ? "#FFC107" : "#DED2CE"}
                                                    fill={i < book.rating ? "#FFC107" : "#FFFFFF"}
                                                    strokeWidth="1.5"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <div className="text-black text-base font-regular font-['Poppins']">({book.reviews} reviews)</div>
                                </div>
                                <div className="px-3 text-black text-base font-normal font-['Lora'] leading-snug">
                                    {book.description}
                                </div>

                                {expandedBooks[index] && (
                                    <div className="flex flex-col items-center justify-center bg-white">
                                        <div className="w-[430px] text-center">
                                            <div className="flex flex-row gap-16 mb-2">
                                                <div className="text-lg font-semibold text-black font-['Poppins'] text-left mt-1">Page Count: 
                                                <span className=" text-black text-base font-medium font-['Lora'] leading-snug text-left mb-2 pl-1"> {book.additionalDetails.pages}</span>
                                                </div>
                                                <div className="text-lg font-semibold text-black font-['Poppins'] text-left mt-1">Language: 
                                                <span className=" text-black text-base font-medium font-['Lora'] leading-snug text-left mb-2 pl-1"> {book.additionalDetails.language}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-start">
                                                <div className="text-lg font-medium font-['Poppins'] text-left">Author: </div>
                                                <div className=" text-black text-base font-normal font-['Lora'] leading-snug text-left"> {book.additionalDetails.author}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <button className="w-10 h-10 bg-beige rounded-full flex flex-col justify-center items-center hover:bg-yellow active:bg-yellow cursor-pointer mt-1" onClick={() => handleButtonClick(index)}>
                                    {expandedBooks[index] ? (
                                        <svg width="22" height="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 20L4 4M20 4L4 20" stroke="#151515" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    ) : (
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="relative cursor-pointer"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        > 
                                            <path
                                                d="M10.4284 5.67699C10.4284 6.48056 11.0712 7.12342 11.8748 7.12342C12.6882 7.12342 13.3212 6.48056 13.3114 5.67699C13.3114 4.86356 12.6882 4.2207 11.8748 4.2207C11.0712 4.2207 10.4284 4.86356 10.4284 5.67699ZM7.9375 18.9563C7.9375 19.4483 8.28893 19.7796 8.82121 19.7796H15.1795C15.7118 19.7796 16.0636 19.4483 16.0636 18.9558C16.0636 18.4741 15.7122 18.1424 15.1795 18.1424H13.1605V10.4783C13.1605 9.93613 12.8091 9.57399 12.2866 9.57399H9.10236C8.58036 9.57399 8.2285 9.89542 8.2285 10.378C8.2285 10.8803 8.57993 11.2116 9.10279 11.2116H11.3022V18.1424H8.82121C8.28893 18.1424 7.9375 18.4741 7.9375 18.9563Z"
                                                fill="#151515"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-8 items-center justify-center absolute top-[465px] left-[315px]">
                <button className="w-44 h-44 bg-blue rounded-full flex justify-center items-center hover:bg-yellow active:bg-yellow" onClick={handleDislike}>
                    <svg width="74" height="74" viewBox="0 0 24 24" fill="none" className="w-20 h-20 relative" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 20L4 4M20 4L4 20" stroke="#F7F4F3" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                <svg width="74" height="74" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1875 9H3.375M7.3125 4.5L2.8125 9L7.3125 13.5" stroke="#DED2CE" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <div className="flex flex-col gap-8 items-center justify-center absolute top-[465px] right-[315px]">
                <button className="w-44 h-44 bg-red rounded-full flex items-center justify-center hover:bg-yellow active:bg-yellow" onClick={handleLike}>
                    <svg width="74" height="72" viewBox="0 0 22 20" fill="none" className="w-22 h-20 relative" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_42_3060)">
                            <path d="M16 0C13.9 0 12.074 0.999765 11 2.67519C9.926 0.999765 8.1 0 6 0C4.40927 0.00195584 2.88422 0.669947 1.75941 1.85744C0.634589 3.04493 0.00185261 4.65495 0 6.33431C0 9.41701 1.82 12.6253 5.41 15.8685C7.05506 17.3484 8.83202 18.6565 10.716 19.7747C10.8033 19.8242 10.9009 19.8501 11 19.8501C11.0991 19.8501 11.1967 19.8242 11.284 19.7747C13.168 18.6565 14.9449 17.3484 16.59 15.8685C20.18 12.6253 22 9.41701 22 6.33431C21.9981 4.65495 21.3654 3.04493 20.2406 1.85744C19.1158 0.669947 17.5907 0.00195584 16 0ZM11 18.4867C9.359 17.4869 1.2 12.2168 1.2 6.33431C1.20132 4.99077 1.70746 3.70266 2.60735 2.75263C3.50724 1.8026 4.72737 1.26826 6 1.26686C8.028 1.26686 9.731 2.4102 10.445 4.25138C10.4902 4.36756 10.5671 4.46692 10.6659 4.53686C10.7647 4.60679 10.881 4.64413 11 4.64413C11.119 4.64413 11.2353 4.60679 11.3341 4.53686C11.4329 4.46692 11.5098 4.36756 11.555 4.25138C12.269 2.4102 13.972 1.26686 16 1.26686C17.2726 1.26826 18.4928 1.8026 19.3927 2.75263C20.2925 3.70266 20.7987 4.99077 20.8 6.33431C20.8 12.2168 12.641 17.4869 11 18.4867Z" fill="#F7F4F3"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_42_3060">
                                <rect width="74" height="72" fill="#DED2CE"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <svg width="74" height="74" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_42_3302)">
                        <path d="M2.8125 9H14.625M10.6875 13.5L15.1875 9L10.6875 4.5" stroke="#DED2CE" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_42_3302">
                            <rect width="18" height="18" fill="white" transform="matrix(0 1 -1 0 18 0)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            </div>
        </>
    );
};

export default BookSwipe;

