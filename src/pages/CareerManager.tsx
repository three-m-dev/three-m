import { CareersTable, DashboardNavbar } from '../components';

const CareerManager = () => {
	return (
		<div className="flex flex-col h-screen">
			<DashboardNavbar />
			<CareersTable />
		</div>
	);
};

export default CareerManager;
