import React from "react";
import net from '../assets/images/net.png'
import spikedive from '../assets/images/spikedive.jpeg'
import spikematch from '../assets/images/spikematch.jpg'
const SidePics =  () => {

    return(
        <div className="flex justify-center flex-col items-center ">
                <div className="flex flex-row h-150 w-300">
                        <div className="w-150 flex flex-col">
                                <div className="font-bold text-4xl mt-30 text-center">What is Spike Ball?</div>
                                <div className=" text-2xl mt-15 pr-4">Spikeball is a fast-paced, 2-on-2 game where teams take turns hitting a small ball onto a round net. The goal is to make it hard for the other team to return the ball—think volleyball meets four square. It’s easy to learn, fun to play, and great for all ages!</div>
                        </div>
                        <img className= "rounded-lg w-150 h-150" src={spikematch}/>
                </div>
                
                
                <div className="flex h-150 w-300">
                        <img className= "rounded-lg w-150 h-150 pr-4" src={net}/>
                        <div className="w-150">
                            <div className="font-bold text-4xl mt-30 text-center">Fun, Fast, and Social</div>
                            <div className=" text-2xl mt-15">Spikeball is the ultimate mix of excitement and connection. Whether you're playing with close friends or meeting new people, the fast-paced rallies and team-based gameplay bring everyone together. It’s easy to learn, endlessly replayable, and keeps you moving from start to finish. Perfect for parties, beach days, or just some friendly competition—Spikeball turns any space into an active, fun-filled arena!








</div>
                        </div>
                </div>
                
                
                <div className="flex h-150 w-300">
                        <div className="w-150 flex flex-col">
                                <div className="font-bold text-4xl mt-30 text-center">Play Hard, Stay Fit</div>
                                <div className=" text-2xl mt-15">Spikeball isn’t just a game—it’s an exciting way to stay active. With constant movement, quick reactions, and full-body engagement, every match becomes a fun workout. You’ll be running, diving, jumping, and laughing as you try to keep the ball in play. It’s a great way to burn energy, build coordination, and enjoy time with friends, all while getting a solid dose of exercise without even realizing it!</div>
                        </div>
                        <img className= "rounded-lg w-150 h-125" src={spikedive}/>
                </div>
        </div>
    )
}

export default SidePics