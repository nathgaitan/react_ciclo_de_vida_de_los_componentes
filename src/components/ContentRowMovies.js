import React from 'react';
import PropTypes from 'prop-types'

const ContentRowMovies = ({title,color,amount,icon}) => {
    return (
    
                    <div className="col-md-4 mb-4">
                        <div className={`card border-left-${color} shadow h-100 py-2`}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{amount}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    );
}

ContentRowMovies.propTypes = {
  title : PropTypes.string.isRequired,
  color : PropTypes.string.isRequired,
  amount : PropTypes.number,
  icon : PropTypes.string.isRequired
}

ContentRowMovies.defaultProps = {
    titulo: "Sin titulo",
	color: "danger",
	amount: 0,
	icon: "fa-award"
}

export default ContentRowMovies;
