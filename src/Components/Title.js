import React from "react"
class TitleImage extends React.Component{
    render(){
        const styleImg = {
            width : '500px'
        }
        return(<div>
            <img style={styleImg} src="https://static.vecteezy.com/system/resources/thumbnails/010/658/195/small_2x/to-do-list-black-ink-lettering-isolated-on-white-background-calligraphy-design-element-for-organizers-planners-schedule-list-template-vector.jpg" alt="Not Found"/>
        </div>)
    }
}

export default TitleImage