import {Route} from 'react-router-dom';
import bootstrap from 'bootstrap';
import React, {Component, Fragment} from 'react';
import GalleryNavbar from "./GalleryNavbar";
import Gallery from "./Gallery";
import Uploader from "./Uploader";
import ManageGallery from "./ManageGallery";
 
import Dropzone from 'react-dropzone';
import toastr from 'toastr';
import axios from 'axios';
export default class GalleryEdit extends Component {
    render() {
        return (
            <Fragment>
                <Route path="/" render={(props) => (
                    <GalleryNavbar {...props}/>
                )}/>
 
                <div className="container">
                    <Route exact path="/gallery/Gallery" component={Gallery}/>
                    <Route exact path="/gallery/ManageGallery" component={ManageGallery}/>
                    <Route exact path="/gallery/Uploader" component={Uploader}/>
                </div>
            </Fragment>
        );
    }
}