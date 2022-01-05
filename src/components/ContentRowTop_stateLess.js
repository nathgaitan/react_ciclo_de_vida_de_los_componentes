import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

const ContentRowTop = () => {
	let data = [
		{
			title: "Movies in Data Base",
			color: "primary",
			amount: 21,
			icon: "fa-film"
		},
		{
			title: "Total awards",
			color: "success",
			amount: 79,
			icon: "fa-award"
		},
		{
			title: "Actors quantity",
			color: "warning",
			amount: 21,
			icon: "fa-user"
		}

	]
    return (
        <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<div className="row">
						{
							data.map((item, i) => {
							 return <ContentRowMovies 
										key={item.title+i}
							 			title={item.title}
										color={item.color} 
										amount={item.amount} 
										icon={item.icon} 
									/>
							})
						}
					</div>
					<div className="row">
						<LastMovieInDb/>
						<GenresInDb/>
					</div>
				</div>
    )
}

export default ContentRowTop;