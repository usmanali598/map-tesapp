import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoidXNtYW5hbGl2YWlzIiwiYSI6ImNsNDB6eTFvOTBiamozZHIxNTdidndiYTcifQ.fzrC_mZ35Un2yPuph_xPvw'
});

// in render()
<Map
    style="mapbox://styles/mapbox/streets-v9"
    containerStyle={{
        height: '100vh',
        width: '100vw'
    }}
>
    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        <Feature coordinates={[24.94635303390063, 60.170241785894056]} />

    </Layer>

    <Popup
        coordinates={[24.15, 60.25]}
        offset={{
            'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
        }}
        anchor="center" style={{ backgroundColor: 'orange' }}>
        <h1 style={{ fontSize: '70px', color: 'red', background: 'green' }}>Pop up wlekr lkejlkrwekljrklwej rlwejrlwekrep</h1>
    </Popup>
</Map>;

export default Map;