import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";

const orderStats = {
	totalThreats: "1,258",
	unresolvedThreats: "56",
	resolvedThreats: "1,178",
	securityScore: "89%",
};

const OrdersPage = () => {
	return (
		<div className='flex-1 relative z-10 overflow-auto'>
			<Header title={"Threat Timeline"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Threats Detected' icon={ShoppingBag} value={orderStats.totalThreats} color='#6366F1' />
					<StatCard name='Unresolved Threats' icon={Clock} value={orderStats.unresolvedThreats} color='#F59E0B' />
					<StatCard
						name='Resolved Threats'
						icon={CheckCircle}
						value={orderStats.resolvedThreats}
						color='#10B981'
					/>
					<StatCard name='Security Score' icon={DollarSign} value={orderStats.securityScore} color='#EF4444' />
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<DailyOrders />
					<OrderDistribution />
				</div>

				<OrdersTable />
			</main>
		</div>
	);
};
export default OrdersPage;
