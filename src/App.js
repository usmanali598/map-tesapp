

import ReactMapboxGl, { Layer, Feature, Popup, Marker, Cluster, RotationControl, Image } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoidXNtYW5hbGl2YWlzIiwiYSI6ImNsNDB6eTFvOTBiamozZHIxNTdidndiYTcifQ.fzrC_mZ35Un2yPuph_xPvw'
});

const paints = {
  "fill-color": "orange",
  'line-color': 'orange',
  'line-width': 50
}

function App() {
  return (
    <div className="App">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[60.1674881, 24.9427473]}
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
        zoom={[15]} renderChildrenInPortal={true}
      >
        <Layer minZoom={24} onClick={(_, event) => console.log(event, 'clickkkkk layer')} onMouseMove={(_, event) => console.log(event, 'move')} type="circle" id="marker" layout={{ 'icon-image': 'harbor-15', 'visibility': 'visible' }} paint={paints}>
          <Feature coordinates={[60.1674881, 24.9427473]}  />
          <Feature coordinates={[60.1578, 24.93125]}  />
        </Layer>
        <Layer minZoom={24} onClick={(_, event) => console.log(event, 'clickkkkk layer')} onMouseMove={(_, event) => console.log(event, 'move')} type="circle" id="marker" layout={{ 'icon-image': 'harbor-15', 'visibility': 'visible' }} paint={paints}>
          <Feature coordinates={[60.1674881, 24.9427473]}  />
        </Layer>
        <Layer minZoom={24} onClick={(_, event) => console.log(event, 'clickkkkk layer')} onMouseMove={(_, event) => console.log(event, 'move')} type="circle" id="marker" layout={{ 'icon-image': 'harbor-15', 'visibility': 'visible' }} paint={paints}>
          <Feature coordinates={[60.1674881, 24.9427473]}  />
        </Layer>
        <Layer minZoom={24} onClick={(_, event) => console.log(event, 'clickkkkk layer')} onMouseMove={(_, event) => console.log(event, 'move')} type="circle" id="marker" layout={{ 'icon-image': 'harbor-15', 'visibility': 'visible' }} paint={paints}>
          <Marker
            coordinates={[60.1674881, 24.9427473]}
            anchor="bottom">
            <img src={'http://simpleicon.com/wp-content/uploads/map-marker-5.png'} />
          </Marker>
          <Feature coordinates={[60.1674881, 24.9427473]}  />
        </Layer>
       
        <Image id={'image-uid'} url={'http://simpleicon.com/wp-content/uploads/map-marker-5.png'} />
        <Popup
          coordinates={[60.1674881, 24.9427473]}
          offset={{
            'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
          }}>
          <h1 style={{width:'100px', height:'100px', background:'yellow', color:'blue'}}>Popup</h1>
        </Popup>

      
      </Map>;
    </div>
  );
}

export default App;