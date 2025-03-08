function hexToRGB(hex) {
    if (!hex || !hex.startsWith("#") || hex.length !== 7) {
        return "rgb(0, 0, 0)"; // Negro predeterminado si el valor no es válido
    }

    const r = parseInt(hex.slice(1, 3), 16); // Rojo
    const g = parseInt(hex.slice(3, 5), 16); // Verde
    const b = parseInt(hex.slice(5, 7), 16); // Azul

    return `rgb(${r}, ${g}, ${b})`;
}

const handleCopy = (text, setCopied) => {
    navigator.clipboard
        .writeText(text)
        .then(() => setCopied(true))
        .catch(() => alert("Error al copiar el código CSS"));
};

export default function Codes({ direction, color1, color2, copied, setCopied }) {
    const hexRGB1 = hexToRGB(color1 || "#000000");
    const hexRGB2 = hexToRGB(color2 || "#000000");

    return (
        <div>
            <h3>Código CSS:</h3>

            {/* Gradiente en notación hexadecimal */}
            <div className="div-code">
                <p className="code">
                    linear-gradient(to {direction}, {color1}, {color2})
                </p>
                <button
                    className="btn"
                    onClick={() =>
                        handleCopy(
                            `linear-gradient(to ${direction}, ${color1}, ${color2})`,
                            setCopied
                        )
                    }
                >
                    <img
                        src={copied ? "check.png" : "copy.png"}
                        alt={copied ? "copiado" : "copiar"}
                        width={30}
                        height={30}
                    />
                </button>
            </div>

            {/* Gradiente en notación RGB */}
            <div className="div-code">
                <p className="code">
                    linear-gradient(to {direction}, {hexRGB1}, {hexRGB2})
                </p>
                <button
                    className="btn"
                    onClick={() =>
                        handleCopy(
                            `linear-gradient(to ${direction}, ${hexRGB1}, ${hexRGB2})`,
                            setCopied
                        )
                    }
                >
                    <img
                        src={copied ? "check.png" : "copy.png"}
                        alt={copied ? "copiado" : "copiar"}
                        width={30}
                        height={30}
                    />
                </button>
            </div>
        </div>
    );
}
