import 'google.maps'

// intrustions to other classes on how to be argument to 'addMarket'
export interface Mappable {
    location: {
        lat:number,
        lng:number
    }
    // for something to be mappable
    markerContent(): string; 
    color: string;
}

export class CustomMap {
    // assume other engineers cant access contents of the map
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    // add user marker
    addMarker(mappable: Mappable): void {
        const marker =  new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
    //  add popup for marker
    marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent()
        });

        infoWindow.open(this.googleMap, marker);
    });
    }
};