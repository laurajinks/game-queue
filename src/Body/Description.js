import React from "react";

const Description = props => {
    //take description string with HTML tags, remove tags, cut length down to 1000 characters
    const formatDescription = text => {
        let html = text;
        let div = document.createElement("div");
        div.innerHTML = html;
        let description = div.textContent || div.innerText || "";
        if (description.length > 1000) {
            description = description.substring(8, 1008) + "...";
        }
        return description;
    };

    return (
        <div className="descriptionContainer">
            <div className="description">
                <p>Genres:</p>
                <h1 className="descriptionTitle">Description</h1>
                <button
                    className="closeDescriptionBtn"
                    onClick={() => props.toggleDescription(false)}
                >
                    X
                </button>
                {formatDescription(props.description)}
                <div className="linkContainer">
                    <a
                        href={`https://www.giantbomb.com/games/${props.guid}`}
                        className="moreInfoLink"
                    >
                        More info >>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Description;
