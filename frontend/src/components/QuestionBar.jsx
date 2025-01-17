import React from 'react';
import Button from './Button';
import DropDown from './DropDown'

const QuestionBar = ({ questionDetails, dropDown }) => {
    return (
        <div  className="bg-darkGray text-white max-w-2xl h-auto border-2 border-darkGray ">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 bg-secondaryGray h-11">
                <Button/>
                <DropDown />
            </div>

            <div className='m-6'>
                {/* Title */}
                <h1 className="text-3xl  mb-4">{questionDetails.title}</h1>

                {/* Problem Description */}
                <div className="space-y-4 mb-6">
                    <p className="text-textGray text-base">
                        {questionDetails.problemStatement}
                    </p>
                    <p className="text-textGray">
                        {questionDetails.assumption}
                    </p>
                </div>

                {/* Examples */}
                <div className="space-y-6 ">
                    <div className='bg-secondaryGray rounded-l p-2 pl-4'>
                        <h2 className="text-lg font-semibold mb-3">Example -1</h2>
                        <div className="p-4 rounded">
                            <div className="mb-2">
                                <span className="text-textGray">Input: </span>
                                <span> {questionDetails.firstExample}</span>
                            </div>
                            <div>
                                <span className="text-textGray">output: </span>
                                <span> {questionDetails.firstExampleAns}</span>
                            </div>
                        </div>
                    </div>

                    <div className='bg-secondaryGray rounded-l p-2 pl-4'>
                        <h2 className="text-lg font-semibold mb-3">Example -2</h2>
                        <div className="p-4 rounded">
                            <div className="mb-2">
                                <span className="text-textGray">Input: </span>
                                <span> {questionDetails.secondExample}</span>
                            </div>
                            <div>
                                <span className="text-textGray">output: </span>
                                <span> {questionDetails.secondExampleAns}</span>
                            </div>
                        </div>
                    </div>

                    {/* Constraints */}


                    <div>
                        <h2 className="text-lg font-semibold mb-3">Constraints</h2>
                        <ul className="list-disc list-inside text-gray-300 pl-4">
                            <li>{questionDetails.constraint1}</li>
                            <li>{questionDetails.constraint2}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionBar;