import { useState, useRef, useEffect } from "react";
import "./App.css";
import Gradiente from "./Components/Gradients";
import Codes from "./Components/Codes";

function App() {
    const [colors, setColors] = useState({ color1: "#000000", color2: "#000000" }); // Valores predeterminados
    const [direction, setDirection] = useState("right");
    const [copied, setCopied] = useState(false);

    const inputRefs = [useRef(), useRef()];
    const directions = [
        { direction: "top left", src: "arrow_top_left.png", size: 30 },
        { direction: "top", src: "arrow_top.png", size: 30 },
        { direction: "top right", src: "arrow_top_right.png", size: 30 },
        { direction: "left", src: "arrow_left.png", size: 20 },
        { direction: "right", src: "arrow_right.png", size: 18 },
        { direction: "bottom left", src: "arrow_down_left.png", size: 23 },
        { direction: "bottom", src: "arrow_down.png", size: 18 },
        { direction: "bottom right", src: "arrow_down_right.png", size: 22 },
    ];

    useEffect(() => setCopied(false), [colors, direction]);

    const handleColorChange = () => {
        setColors({
            color1: inputRefs[0].current.value,
            color2: inputRefs[1].current.value,
        });
    };

    return (
        <div className="container">
            <h1 className="title">Gradient Maker</h1>
            <h3 className="subtitle">Create your beautiful gradients</h3>

            <div className="container-stuff">
                {/* Inputs de selección de color */}
                <div className="container-colors">
                    {["Color 1", "Color 2"].map((label, idx) => (
                        <div key={idx}>
                            <h3>{label}:</h3>
                            <input ref={inputRefs[idx]} type="color" onChange={handleColorChange} />
                        </div>
                    ))}

                    {/* Botones de dirección */}
                    <ul className="container-direction">
                        {directions.map((item, idx) => (
                            <li key={idx}>
                                <button
                                    className="btn-direction"
                                    onClick={() => setDirection(item.direction)}
                                    disabled={!item.direction}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.direction || "N/A"}
                                        width={item.size}
                                        height={item.size}
                                        onError={(e) => (e.target.style.display = "none")}
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visualización del gradiente */}
                <Gradiente direction={direction} {...colors} />
            </div>

            {/* Generación de código CSS */}
            <Codes direction={direction} {...colors} copied={copied} setCopied={setCopied} />
        </div>
    );
}

export default App;
