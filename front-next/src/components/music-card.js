'use client'

import {timeAgo} from "@/lib/utils";
import {useState} from "react";

export default function MusicCard({title, author, link, createdAt, likes}) {
    const [liked, setLiked] = useState(false)
    const [likesState, setLikes] = useState(likes)

    const handleLike = () => {
        setLiked((prev) => {
            if (prev) {
                setLikes(likesState - 1)
            } else {
                setLikes(likesState + 1)
            }
            return !prev
        })
    }
    return (

        <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-10 max-w-md md:max-w-2xl ">
            <div className="flex items-start px-4 py-6">
                <img className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                     src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                     alt="avatar"/>
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold text-gray-900 -mt-1">{author} </h2>
                        <small className="text-sm text-gray-700">{timeAgo(createdAt)}  </small>
                    </div>
                    <p className="text-gray-700">{title} </p>
                    <div className="mt-3">
                        <iframe width="560" height="315"
                                src={link}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


                    </div>
                    <div className="mt-4 flex items-center">
                        <div className="flex mr-2 text-gray-700 text-sm mr-3">
                            <svg onClick={handleLike} fill={liked ? "red" : "none"} viewBox="0 0 24 24"
                                 className="w-4 h-4 mr-1 cursor-pointer" stroke={liked ? 'none' : "currentColor"}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                            <span>{likesState}</span>
                        </div>
                        <div className="flex mr-2 text-gray-700 text-sm mr-4">
                            <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                            </svg>
                            <span>share</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}