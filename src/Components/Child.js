import React from "react"
function Child ({count}) {
    console.log ("Child Component is being rerendered")
    return (
        <div>
            child count is {count} 
        </div>
    )
}

export default React.memo(Child)