import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  TrendingUp, 
  MapPin,
  Phone,
  Star,
  Package,
  DollarSign,
  Calendar,
  Users
} from "lucide-react";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "vegetables",
      price: "₹45/kg",
      seller: "Rajesh Kumar",
      location: "Pune, Maharashtra",
      rating: 4.8,
      stock: "500 kg available",
      image: "🍅",
      verified: true,
      organic: true
    },
    {
      id: 2,
      name: "Basmati Rice",
      category: "grains",
      price: "₹85/kg",  
      seller: "Farmers Collective",
      location: "Haryana",
      rating: 4.9,
      stock: "10 tons available",
      image: "🌾",
      verified: true,
      organic: false
    },
    {
      id: 3,
      name: "Fresh Onions",
      category: "vegetables",
      price: "₹25/kg",
      seller: "Sunita Devi",
      location: "Nashik, Maharashtra", 
      rating: 4.6,
      stock: "2 tons available",
      image: "🧅",
      verified: true,
      organic: false
    },
    {
      id: 4,
      name: "Organic Wheat",
      category: "grains",
      price: "₹32/kg",
      seller: "Green Valley Farm",
      location: "Punjab",
      rating: 4.7,
      stock: "5 tons available", 
      image: "🌾",
      verified: true,
      organic: true
    }
  ];

  const marketPrices = [
    { crop: "Tomato", currentPrice: "₹45", trend: "+8%", status: "up" },
    { crop: "Onion", currentPrice: "₹25", trend: "-3%", status: "down" },
    { crop: "Potato", currentPrice: "₹20", trend: "+12%", status: "up" },
    { crop: "Rice", currentPrice: "₹85", trend: "+5%", status: "up" },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-r from-primary to-primary-glow rounded-lg">
          <ShoppingCart className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Smart Marketplace</h1>
          <p className="text-muted-foreground">Buy and sell agricultural products directly with farmers</p>
        </div>
      </div>

      <Tabs defaultValue="buy" className="space-y-6">
        <TabsList className="grid w-fit grid-cols-3">
          <TabsTrigger value="buy">Buy Products</TabsTrigger>
          <TabsTrigger value="sell">Sell Products</TabsTrigger>
          <TabsTrigger value="prices">Market Prices</TabsTrigger>
        </TabsList>

        <TabsContent value="buy" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products or sellers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="vegetables">Vegetables</SelectItem>
                <SelectItem value="grains">Grains</SelectItem>
                <SelectItem value="fruits">Fruits</SelectItem>
                <SelectItem value="dairy">Dairy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="border-0 shadow-card-shadow hover:shadow-hover-lift transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{product.image}</div>
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          {product.verified && (
                            <Badge variant="secondary" className="text-xs">
                              ✓ Verified
                            </Badge>
                          )}
                          {product.organic && (
                            <Badge className="bg-success/10 text-success border-success/20 text-xs">
                              🌿 Organic
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">{product.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">Seller:</span>
                      <span className="font-medium">{product.seller}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-warning fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{product.location}</span>
                  </div>

                  <div className="flex items-center space-x-1 text-sm text-success">
                    <Package className="h-3 w-3" />
                    <span>{product.stock}</span>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <ShoppingCart className="mr-1 h-3 w-3" />
                      Buy Now
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sell" className="space-y-6">
          <Card className="border-0 shadow-card-shadow">
            <CardHeader>
              <CardTitle>List Your Product</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Product Name</label>
                  <Input placeholder="e.g., Fresh Tomatoes" />
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="grains">Grains</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="dairy">Dairy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium">Price per kg (₹)</label>
                  <Input type="number" placeholder="45" />
                </div>
                <div>
                  <label className="text-sm font-medium">Quantity Available</label>
                  <Input placeholder="500 kg" />
                </div>
                <div>
                  <label className="text-sm font-medium">Harvest Date</label>
                  <Input type="date" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Description</label>
                <Input placeholder="Describe your product quality, farming methods, etc." />
              </div>

              <Button className="w-full">
                <Package className="mr-2 h-4 w-4" />
                List Product
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prices" className="space-y-6">
          <Card className="border-0 shadow-card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Current Market Prices</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {marketPrices.map((item, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{item.crop}</h4>
                      <Badge 
                        className={
                          item.status === "up" 
                            ? "bg-success/10 text-success border-success/20" 
                            : "bg-destructive/10 text-destructive border-destructive/20"
                        }
                      >
                        {item.trend}
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold text-primary">{item.currentPrice}</p>
                    <p className="text-xs text-muted-foreground">per kg</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle>Price Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Tomato Price Alert</p>
                    <p className="text-sm text-muted-foreground">Alert when price goes above ₹50/kg</p>
                  </div>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
                
                <Button variant="outline" className="w-full">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Set New Price Alert
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle>Market Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                  <p className="text-sm font-medium text-success mb-1">🔥 Hot Demand</p>
                  <p className="text-xs text-muted-foreground">
                    Tomato prices are rising due to seasonal demand. Good time to sell!
                  </p>
                </div>
                
                <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <p className="text-sm font-medium text-warning mb-1">📊 Market Trend</p>
                  <p className="text-xs text-muted-foreground">
                    Onion prices expected to stabilize next week after recent fluctuation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Marketplace;