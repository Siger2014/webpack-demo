import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// import Component from '../example/Hello.js'
import ComponentApp from '../example/Life.js'

let obj={
    prop3:"fdfd",
    prop4:55,
    prop5:function () {

    },
    prop6:'fdfdf'
}

ReactDOM.render(
    <div>
       <ComponentApp/>
    </div>,
    document.getElementById('app')
)