import React from 'react'
import { FaArrowRight, FaQuestionCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import CTAButton from '../Components/core/HomePage/Button';
import HighlightText from '../Components/core/HomePage/HighlightText';
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../Components/core/HomePage/CodeBlocks";
import TimelineSection from '../Components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../Components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../Components/core/HomePage/InstructorSection';
import ExploreMore from '../Components/core/HomePage/ExploreMore';
import { useDispatch } from 'react-redux';
import { setProgress } from "../slices/loadingBarSlice"
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import CourseSlider from '../Components/core/Catalog/CourseSlider';
import { useEffect, useState } from 'react';
import RatingSlider from '../Components/core/Ratings/RatingSlider';

function Home() {
    const [CatalogPageData, setCatalogPageData] = useState(null);
    const categoryID = "6475dbeb49dcc886b5698441";
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCatalogPageData = async () => {
            const result = await getCatalogaPageData(categoryID, dispatch);
            setCatalogPageData(result);
        }
        if (categoryID) {
            fetchCatalogPageData();
        }
    }, [categoryID, dispatch]);

    return (
        <div className="relative">
            <div className='mx-auto relative flex flex-col w-11/12 items-center justify-between text-white '>
                <Link onClick={() => { dispatch(setProgress(100)) }} to={"/signup"}>
                    <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold transition-all duration-200 hover:scale-95 w-fit max-w-maxContent'>
                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p><FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className='text-center text-3xl md:text-4xl font-semibold mt-7'>
                    Empower Your Future With <HighlightText text={"Coding Skills"} />
                </div>

                <div className='mt-4 w-[90%] text-left md:text-center text-sm md:text-lg font-bold text-richblack-300'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>

                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                    <CTAButton active={false} linkto={"/login"}>Book a Demo</CTAButton>
                </div>

                <div className='mx-3 my-12 shadow-blue-200 w-[70%] relative'>
                    <div className='grad2 -top-10 w-[800px]'></div>
                    <video className='video' muted loop autoPlay>
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>

                <ExploreMore />
            </div>

            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage_bg h-[310px]'>
                    <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                        <div className='h-[150px]'></div>
                        <div className='flex flex-row gap-7 text-white '>
                            <CTAButton active={true} linkto={"/catalog/Web Development"}>
                                <div className='flex items-center gap-3'>
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>Learn more</CTAButton>
                        </div>
                    </div>
                </div>

                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                    <TimelineSection />
                    <LearningLanguageSection />
                </div>
            </div>

            <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
                <InstructorSection />
            </div>

            <div className='mb-16 mt-3'>
                <h2 className='text-center text-2xl md:text-4xl font-semibold mt-8 text-richblack-5 mb-5'>
                    Reviews from other learners
                </h2>
                <RatingSlider />
            </div>

            {/* Floating "Doubt" Button */}
            <button 
                onClick={() => navigate("/AskQuestion")}
                className="fixed bottom-5 left-5 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all duration-300  margin right-250"
            >
                <FaQuestionCircle className="text-lg" />
                Ask a Doubt
            </button>
        </div>
    )
}

export default Home;
