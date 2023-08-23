import './Forms.css';

const Forms = ({setContent, setPosition})=>{
    
    const setText = (e) => {
        setContent(e.target.value)
    }

    const setTipPosition = (e) => {
        setPosition(e.target.value)
    }

    return(
        <div className="Forms">
            <form>
            <label for="TargetElement">Target Element</label>
            <select id="TargetElement" name="TargetElement">
                <option value="Button 1">Button 1</option>
                <option value="Button 2">Button 2</option>
                <option value="Button 3">Button 3</option>
                <option value="Button 4">Button 4</option>
            </select>
            <label for="position">Position</label>
            <select id="position" name="TargetElement" onChange={setTipPosition}>
                <option value="right">Right</option>
                <option value="left">Left</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
            </select>
            <label for="Tooltiptext">Tooltip text</label>
            <input type="text" id="Tooltiptext" name="Tooltiptext" placeholder="Input" onChange={setText}/>

            <span className="info">
                <label for="TextSize">Text Size</label>
                <input type="number" id="TextSize" name="TextSize" placeholder="Input"/>
                <label for="Padding">Padding</label>
                <input type="number" id="Padding" name="Padding" placeholder="Input"/>
            </span>

            <label for="TextColour">Text Colour</label>
            <input type="text" id="TextColour" name="TextColour" placeholder="Input"/>

            <label for="BackgroundColour">Background Colour</label>
            <input type="text" id="BackgroundColour" name="BackgroundColour" placeholder="Input"/>

            <span className="info-inline1">
                <label for="Cornerradius">Corner radius</label>
                <input type="number" id="Cornerradius" name="Cornerradius" placeholder="Input"/>
                <label for="TooltipWidth">Tooltip Width</label>
                <input type="number" id="TooltipWidth" name="TooltipWidth" placeholder="Input"/>
            </span>

            <span className="info-inline2">
                <label for="Arrowwidth">Arrow width</label>
                <input type="number" id="Arrowwidth" name="Arrowwidth" placeholder="Input"/>
                <label for="Arrowheight">Arrow height</label>
                <input type="number" id="Arrowheight" name="Arrowheight" placeholder="Input"/>
            </span>

            </form>
        </div>
    )
}

export default Forms