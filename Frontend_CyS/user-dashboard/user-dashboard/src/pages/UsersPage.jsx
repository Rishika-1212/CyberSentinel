import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";

const userStats = {
	totalThreats: 1528,
	newThreatsToday: 43,
	activeThreats: 852,
	falsePositiveRate: "3.4%",
};

const UsersPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Threat Detection' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total Threats Detected'
						icon={UsersIcon}
						value={userStats.totalThreats.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard name='New Threats Today' icon={UserPlus} value={userStats.newThreatsToday} color='#10B981' />
					<StatCard
						name='Active Threats'
						icon={UserCheck}
						value={userStats.activeThreats.toLocaleString()}
						color='#F59E0B'
					/>
					<StatCard name='False Positive Rate' icon={UserX} value={userStats.falsePositiveRate} color='#EF4444' />
				</motion.div>

				<UsersTable />

				{/* USER CHARTS */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
					<UserGrowthChart />
					<UserActivityHeatmap />
					<UserDemographicsChart />
				</div>
			</main>
		</div>
	);
};
export default UsersPage;
