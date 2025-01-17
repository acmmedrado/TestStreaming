import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import ReactJWPlayer from 'react-jw-player';


class CustomJwPlayer extends Component{

    state = {
        articles : []
    };

    componentDidMount() {
        axios.get('https://back-ana.qa.stormgroup.com.br/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        const { articles } = this.state;
        return (
            <div className="full-height" >
                {articles.map(article => (
                <ReactJWPlayer
                    className="single-player"
                    playerId={article.playerId}
                    playerScript= {article.playerScript}
                    file= {article.file}
                    customProps={{
                        controls: false,
                        repeat: true,
                        defaultBandwidthEstimate: 400000,
                        stretching: 'fill',
                        preload: 'auto',
                        volume: 100,
                        width: '100%',
                        height: '100%',
                    }}
                />
                ))}
            </div>
        );
    }
}
export default CustomJwPlayer;
