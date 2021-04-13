import React from 'react';
import bootstrap from 'bootstrap';
import ReactGallery from 'react-photo-gallery';
import Lightbox from 'lightbox-react';
import Dropzone from 'react-dropzone';
import toastr from 'toastr';
import axios from 'axios';
import react from 'react';
export default class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images : [],
            currentImage: 0,
            lightboxIsOpen: false
        };
    }
    
    componentDidMount(){
        //fetch('/photos')
          //  .then(response => {
            //    const images = response.data;
                this.setState({
                    images : [{uri:"https://images.unsplash.com/photo-1604264849633-67b1ea2ce0a4?rnd=",width:200,height:200},
                    {uri:"https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?rnd=",width:200,height:200}
                    ]
                })
            //})
    }
    
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
 
    render() {
        let photos = this.state.images.map(image => {
            return {
                src :  image.uri,
                width : image.width,
                height : image.height,
                id :  image.id
            }
        });
        return (
            <div className="gallery">
                {this.state.images.length ?
                    <ReactGallery
                        photos={photos}
                        onClick={this.openLightbox.bind(this)}
                    />
                    :
                    <div className="no-images">
                        <h5 className="text-center">
                            You currently have no images in your photos gallery
                        </h5>
                    </div>
                }
 
                <Lightbox images={photos}
                          onClose={this.closeLightbox.bind(this)}
                          onClickPrev={this.gotoPrevious.bind(this)}
                          onClickNext={this.gotoNext.bind(this)}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}/>
            </div>
 
        );
    }
}