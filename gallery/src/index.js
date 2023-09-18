/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Header,TileView,Photo,Frame} from "./Components"


class App extends React.Component {
    state = {
      images: [],
      currentPhotId: null
    }
    componentDidMount() {
      fetch('https://picsum.photos/list').then(response => response.json()).then(data => {
        this.setState({
          images : data.slice(0,30)
        })
      })
      }
      render(){
        
        return( 
          <div>
          <Header>
            <h1> Picsum </h1> 
          </Header>
          <TileView>
          {this.state.images.map(image => { 
            const isActive = this.state.currentPhotId === image.id
            return <Photo 
              key={image.id} 
              src={`https://picsum.photos/1000/1000?image=${image.id}`}
              isActive= {isActive}
              onClick={() => this.setState({currentPhotId: isActive ? null : image.id})}
          />
      })}
          </TileView>
          {this.state.currentPhotId  !== null && <Frame/>}
          </div>
        )
      }
    }
    const rootElement = document.getElementById("root");
    ReactDOM.render( <App/> , rootElement);