import React from 'react';
import './TrackList.css';
import { Track } from "../Track/Track";
import { BaseComponent } from "../BaseComponent/BaseComponent";


export class TrackList extends BaseComponent {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => <Track
                    key={track.id}
                    track={track}
                    onRemove={this.props.onRemove}
                    onAdd={this.props.onAdd} />)}
            </div>
        );
    }
}