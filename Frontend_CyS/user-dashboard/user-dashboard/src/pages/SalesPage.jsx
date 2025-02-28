import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const salesStats = {
	totalIncidents: "125800",
	investigatedAndFound: "78.90%",
	notFoundRate: "3.45%",
	activeCases: "12.3%",
};

const SalesPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Threat Incidents' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* SALES STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Incidents' icon={DollarSign} value={salesStats.totalIncidents} color='#6366F1' />
					<StatCard
						name='Investigated and Found rate'
						icon={ShoppingCart}
						value={salesStats.investigatedAndFound}
						color='#10B981'
					/>
					<StatCard
						name='Not found rate'
						icon={TrendingUp}
						value={salesStats.notFoundRate}
						color='#F59E0B'
					/>
					<StatCard name='Active cases' icon={CreditCard} value={salesStats.activeCases} color='#EF4444' />
				</motion.div>

				<SalesOverviewChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<SalesByCategoryChart />
					<DailySalesTrend />
				</div>
			</main>
		</div>
	);
};
export default SalesPage;
