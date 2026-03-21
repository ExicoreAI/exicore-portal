import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchRobot } from '../services/api';
import ProductNavBar from '../components/ProductNavBar';
import CompareButton from '../components/CompareButton';
import { useComparisonStore } from '../store/comparisonStore';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { selectedRobotIds, addRobot } = useComparisonStore();

  const { data: robot, isLoading } = useQuery({
    queryKey: ['robot', id],
    queryFn: () => fetchRobot(id ?? ''),
    enabled: !!id,
  });

  if (isLoading) {
    return <div className="flex h-[calc(100vh-64px)] items-center justify-center">Loading...</div>;
  }

  if (!robot) {
    return <div className="flex h-[calc(100vh-64px)] items-center justify-center">Robot not found</div>;
  }

  return (
    <>
      <ProductNavBar />
      <div className="flex min-h-[calc(100vh-64px)]">
      <div className="flex-1 p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Media Column (Left) */}
          <div className="w-64 md:w-80 shrink-0 bg-gray-50 dark:bg-slate-800 rounded-lg overflow-hidden">
            {/* Image Gallery */}
            <div className="space-y-4 p-6">
              <div className="relative h-64 w-full bg-gray-200 flex items-center justify-center">
                <img 
                  src={robot.image_url} 
                  alt={robot.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              {/* Thumbnail filmstrip */}
              <div className="flex gap-2 overflow-x-auto">
                {[1, 2, 3].map((index) => (
                  <div 
                    key={index} 
                    className="w-16 h-16 flex-shrink-0 bg-gray-200 flex items-center justify-center"
                  >
                    <img 
                      src={robot.image_url} 
                      alt={`${robot.name} thumbnail ${index}`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
                <div className="w-16 h-16 flex-shrink-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-xl">🎥</span>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-xl">🌐</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Specs Column (Right) */}
          <div className="flex-1 space-y-6">
            {/* Breadcrumb and Title */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Back to Catalog</span>
                <span className="text-gray-400">/</span>
                <span>{robot.company.name}</span>
                <span className="text-gray-400">/</span>
                <span>{robot.name}</span>
              </div>
              <div className="flex items-end gap-4">
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  Share
                </button>
                <CompareButton 
                  count={selectedRobotIds.length} 
                  onClick={() => {
                    addRobot(robot.id);
                  }}
                  variant="outline"
                />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">{robot.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{robot.model}</p>
            
            {/* Status Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded">
                In Stock
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded">
                Enterprise Ready
              </span>
            </div>
            
            {/* Tabbed Spec Navigation */}
            <div className="border-b border-gray-200 dark:border-slate-700 mb-6">
              <div className="flex border-b border-gray-200 dark:border-slate-700">
                <button 
                  className="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-blue-500"
                  // We would add active state logic here
                >
                  Mechanical
                </button>
                <button 
                  className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-blue-500"
                  // Active tab
                >
                  Electrical
                </button>
                <button 
                  className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Software/Compute
                </button>
                <button 
                  className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Compliance
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="space-y-6">
              {/* Mechanical Tab */}
              <section>
                <h2 className="text-xl font-bold mb-4">Mechanical Specifications</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">Dimensions</h3>
                      <table className="w-full text-left text-sm">
                        <tbody>
                          <tr>
                            <td className="py-1">Length:</td>
                            <td className="py-1 text-right">2.5 m</td>
                          </tr>
                          <tr>
                            <td className="py-1">Width:</td>
                            <td className="py-1 text-right">1.2 m</td>
                          </tr>
                          <tr>
                            <td className="py-1">Height:</td>
                            <td className="py-1 text-right">1.8 m</td>
                          </tr>
                          <tr>
                            <td className="py-1">Weight:</td>
                            <td className="py-1 text-right">1,200 kg</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Capabilities</h3>
                      <table className="w-full text-left text-sm">
                        <tbody>
                          <tr>
                            <td className="py-1">Payload Capacity:</td>
                            <td className="py-1 text-right">500 kg</td>
                          </tr>
                          <tr>
                            <td className="py-1">Reach:</td>
                            <td className="py-1 text-right">3.0 m</td>
                          </tr>
                          <tr>
                            <td className="py-1">Speed:</td>
                            <td className="py-1 text-right">2.5 m/s</td>
                          </tr>
                          <tr>
                            <td className="py-1">Precision:</td>
                            <td className="py-1 text-right">±5 mm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Electrical Tab */}
              <section className="hidden">
                <h2 className="text-xl font-bold mb-4">Electrical Specifications</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">Power</h3>
                      <table className="w-full text-left text-sm">
                        <tbody>
                          <tr>
                            <td className="py-1">Power Source:</td>
                            <td className="py-1 text-right">{robot.power_source}</td>
                          </tr>
                          <tr>
                            <td className="py-1">Voltage:</td>
                            <td className="py-1 text-right">480V AC</td>
                          </tr>
                          <tr>
                            <td className="py-1">Power Consumption:</td>
                            <td className="py-1 text-right">15 kW</td>
                          </tr>
                          <tr>
                            <td className="py-1">Battery Capacity:</td>
                            <td className="py-1 text-right">80 kWh</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Control System</h3>
                      <table className="w-full text-left text-sm">
                        <tbody>
                          <tr>
                            <td className="py-1">Controller:</td>
                            <td className="py-1 text-right">Industrial PC</td>
                          </tr>
                          <tr>
                            <td className="py-1">Communication:</td>
                            <td className="py-1 text-right">5G, Wi-Fi 6</td>
                          </tr>
                          <tr>
                            <td className="py-1">IO Ports:</td>
                            <td className="py-1 text-right">16x Digital, 8x Analog</td>
                          </tr>
                          <tr>
                            <td className="py-1">Safety:</td>
                            <td className="py-1 text-right">ISO 13849 PLd</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Software/Compute Tab */}
              <section className="hidden">
                <h2 className="text-xl font-bold mb-4">Software & Compute Specifications</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">Processing</h3>
                      <table className="w-full text-left text-sm">
                        <tbody>
                          <tr>
                            <td className="py-1">CPU:</td>
                            <td className="py-1 text-right">Quad-core ARM Cortex-A78</td>
                          </tr>
                          <tr>
                            <td className="py-1">GPU:</td>
                            <td className="py-1 text-right">NVIDIA Jetson Orin</td>
                          </tr>
                          <tr>
                            <td className="py-1">RAM:</td>
                            <td className="py-1 text-right">32 GB LPDDR5</td>
                          </tr>
                          <tr>
                            <td className="py-1">Storage:</td>
                            <td className="py-1 text-right">1 TB NVMe SSD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Software</h3>
                      <table className="w-full text-left text-sm">
                        <tbody>
                          <tr>
                            <td className="py-1">OS:</td>
                            <td className="py-1 text-right">Linux RT (Real-Time)</td>
                          </tr>
                          <tr>
                            <td className="py-1">Middleware:</td>
                            <td className="py-1 text-right">ROS 2</td>
                          </tr>
                          <tr>
                            <td className="py-1">AI Framework:</td>
                            <td className="py-1 text-right">TensorRT, PyTorch</td>
                          </tr>
                          <tr>
                            <td className="py-1">Connectivity:</td>
                            <td className="py-1 text-right">OPC UA, MQTT</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Compliance Tab */}
              <section className="hidden">
                <h2 className="text-xl font-bold mb-4">Compliance & Certifications</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">Safety Certifications</h3>
                      <table className="w-full text-left text-sm">
                        <tbody>
                          <tr>
                            <td className="py-1">ISO:</td>
                            <td className="py-1 text-right">ISO 10218-1, ISO 13849</td>
                          </tr>
                          <tr>
                            <td className="py-1">Regional:</td>
                            <td className="py-1 text-right">CE, UL, CSA</td>
                          </tr>
                          <tr>
                            <td className="py-1">Safety Standards:</td>
                            <td className="py-1 text-right">ANSI/RIA R15.06</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Environmental</h3>
                      <table className="w-full text-left text-sm">
                        <tbody>
                          <tr>
                            <td className="py-1">IP Rating:</td>
                            <td className="py-1 text-right">IP65</td>
                          </tr>
                          <tr>
                            <td className="py-1">Operating Temp:</td>
                            <td className="py-1 text-right">-20°C to 45°C</td>
                          </tr>
                          <tr>
                            <td className="py-1">Humidity:</td>
                            <td className="py-1 text-right">10% to 95% non-condensing</td>
                          </tr>
                          <tr>
                            <td className="py-1">Noise Level:</td>
                            <td className="py-1 text-right">75 dB(A)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;