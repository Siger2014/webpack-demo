
import React, {Component} from 'react'

import './hello.css'
import './Hello.scss'

export default class Hello extends Component {
    print=()=>{
        console.log(1111111)
    }

    render() {
        return (
            <div className="bg">
                {/*注释*/}
                <h1>黑马4期{this.print()}</h1>
                <img src="" alt=""/>
            </div>
        )
    }
}
