import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
class ImageGrid extends Component{
    render() {
        return(
            <Grid 
            container
            direction="row"
            spacing={24}>
                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                    <img src={this.props.img1} width="100%"/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Grid container
                    direction="row"
                    justify="center"
                    spacing={24}>
                        <Grid item xs={12} md={6} lg={12}>
                            <Grid container
                            direction="row"
                            justify="center"
                            spacing={24}>
                            <Grid item xs={6} lg={6}>
                                <img src={this.props.img2} width="100%" />
                            </Grid>
                            <Grid item xs={6} lg={6}>
                                <img src={this.props.img3} width="100%" />
                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} lg={12}>
                        <Grid container
                        direction="row"
                        justify="center"
                        spacing={24}>
                            <Grid item xs={6} lg={6}>
                                <img src={this.props.img4} width="100%" />
                            </Grid>
                            <Grid item xs={6} lg={6}>
                                <img src={this.props.img5} width="100%" />
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}
export default ImageGrid;