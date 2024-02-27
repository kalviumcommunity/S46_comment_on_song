import React from "react"
import { Link } from "react-router-dom"
import "./AddFavSongBtn.css"

function AddFavSongBtn() {
    return (
        <Link to="/addfavsong" className="addfav">
            Add your fav song
        </Link>
    )
}

export default AddFavSongBtn
