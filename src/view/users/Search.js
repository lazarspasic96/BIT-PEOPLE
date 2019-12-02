import React from 'react'


const Search = (props) => {

    return (


        <form className="col s10">
            <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">search</i>
                    <textarea className="materialize-textarea" onChange={event => props.onSearch(event.target.value)}></textarea>

                </div>
            </div>
        </form>


    )

}

export default Search;