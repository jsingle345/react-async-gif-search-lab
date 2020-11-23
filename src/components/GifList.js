import React from 'react'

// export default class GifList extends Component {

//     constructor(props){
//         super(props)

//         this.state = {
//             data: this.props.data
//         }
//     }
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

const GifList = props => {
    console.log(props)
    return (
        <div>
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)}
        </div>
    )
}

export default GifList