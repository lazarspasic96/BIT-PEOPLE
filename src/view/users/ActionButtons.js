import React from 'react'



const ActionButtons = (props) => {
    const icon = props.isGrid
        ? 'view_list'
        : 'view_module'

    return (
        <>
            <div className='col s2 '>
                <ul className='buttons'>
                    <li><a><i className="material-icons" onClick={props.changeLayout}>{icon}</i></a></li>
                    < li > <a><i className="material-icons" onClick={props.refresh}>refresh</i></a></li>
                </ul>

            </div >
        </>
    )


}

export default ActionButtons;