import React from "react";
import Data from "./Data";
import ReactDOM from "react-dom";
import "./button.css"
import Gallery from "./Gallery";

function flower() {
    {
        return (
            ReactDOM.render(
                <>
                    {
                        Data[0].map((image) => {
                            console.log(image.id);
                            return (
                                <img src={image.imgUrl} key={image.id} />
                            )
                        })
                    }</>,
                document.getElementById('image')
            )
        )
    }
}
function animal() {
    {
        return (
            ReactDOM.render(
                <>
                    {
                        Data[1].map((image) => {
                            console.log(image.id);
                            return (
                                <img src={image.imgUrl} key={image.id} />
                            )
                        })
                    }</>,
                document.getElementById('image')
            )
        )
    }
}
function fruits() {
    {

        return (
            ReactDOM.render(
                <>
                    {
                        Data[2].map((image) => {
                            console.log(image.id);
                            return (
                                <img src={image.imgUrl} key={image.id} />
                            )
                        })
                    }</>,
                document.getElementById('image')
            )
        )
    }
}
function Button() {

    return (
        <>
            <div className="container">
                <button onClick={() => flower()} >Flowers</button>
                <button onClick={() => animal()}>Animals</button>
                <button onClick={() => fruits()}> Fruits</button>
            </div>
        </>
    )
}

export default Button;