import type { Metadata } from 'next';
import {
  Activity,
  ArrowUpRight,
  CircleDollarSign,
  CreditCard,
  DollarSign,
  Users,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { SalesChart } from '@/components/dashboard/sales-chart';
import { AcosChart } from '@/components/dashboard/acos-chart';


export const metadata: Metadata = {
  title: 'Performance Dashboard | NovaNext',
  description: 'Track and visualize key metrics for your e-commerce business. Gain actionable insights into your marketplace performance.',
};


export default function DashboardPage() {
    const recentSales = [
        { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00', status: 'Shipped' },
        { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00', status: 'Shipped' },
        { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00', status: 'Processing' },
        { name: 'William Kim', email: 'will@email.com', amount: '+$99.00', status: 'Shipped' },
        { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00', status: 'Delivered' },
      ];

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Performance Dashboard
        </h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8%</div>
            <p className="text-xs text-muted-foreground">+1.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ACOS</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28.2%</div>
            <p className="text-xs text-muted-foreground">-5% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <SalesChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
          <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {recentSales.map((sale) => (
                <TableRow key={sale.email}>
                    <TableCell>
                    <div className="font-medium">{sale.name}</div>
                    <div className="text-sm text-muted-foreground">{sale.email}</div>
                    </TableCell>
                    <TableCell>
                        <Badge variant={sale.status === 'Shipped' ? 'default' : sale.status === 'Processing' ? 'secondary' : 'outline'}>
                            {sale.status}
                        </Badge>
                    </TableCell>
                    <TableCell className="text-right">{sale.amount}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
       <div className="grid grid-cols-1 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Advertising Performance (ACOS)</CardTitle>
             <CardDescription>Advertising Cost of Sale over the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <AcosChart />
          </CardContent>
        </Card>
      </div>
    </div>
  