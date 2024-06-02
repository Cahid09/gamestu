function TalkABout({bgImage}){
    return(
        <div className={`get-in-quote bg-[#293445]`} style={{backgroundImage: `url(${bgImage})`}}>
<div className="talk-about-container">
    <h1>Let’s talk about your project</h1>
    <p>Phasellus ut interdum nunc, vel pretium ligula. Nam tincidunt enim ut ligula vehicula lorem ipsum dolor sit amet.</p>
<a href="#">Get In Touch</a>
</div>
        </div>
    )
}
export default TalkABout