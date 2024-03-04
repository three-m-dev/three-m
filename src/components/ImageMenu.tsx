const ImageMenu = () => {
	return (
		<div className="flex">
			<div className="w-full">
				<div className="aspect-w-16 aspect-h-9">
					<img
						src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d9?auto=format&fit=crop&w=800"
						alt=""
						className="object-cover"
					/>
				</div>
			</div>
			<div className="w-full aspect-video"></div>
			<div className="w-full aspect-video"></div>
		</div>
	);
};

export default ImageMenu;
