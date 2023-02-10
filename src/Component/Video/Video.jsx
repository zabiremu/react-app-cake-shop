import React, { Fragment } from 'react'

export default function Video() {
  return (
    <Fragment>
    {/*-- Video Modal Start --*/}
    <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content rounded-0">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {/*-- 16:9 aspect ratio --8*/}
                    <div className="ratio ratio-16x9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/sunKZtFRiuw" id="video" allowfullscreen allowscriptaccess="always"
                            allow="autoplay"></iframe>      
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*-- Video Modal End --*/}
    </Fragment>
  )
}
