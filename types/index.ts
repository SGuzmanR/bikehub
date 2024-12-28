import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
};

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
};

export interface BikeProps {
  make: string;
  model: string;
  year: number;
  transmission: string;
  // type:"Sport"
  // displacement:"649.0 ccm (39.60 cubic inches)"
  // engine:"Twin, four-stroke"
  // compression:"10.8:1"
  // bore_stroke:"83.0 x 60.0 mm (3.3 x 2.4 inches)"
  // valves_per_cylinder:"4"
  // fuel_system:"Injection. DFI® with dual 36mm Keihin throttle bodies"
  // fuel_control:"Double Overhead Cams/Twin Cam (DOHC)"
  // lubrication:"Forced lubrication, semi-dry sump"
  // cooling:"Liquid"
  // gearbox:"6-speed"
  // clutch:"Assist and Slipper Clutch"
  // frame:"Trellis, high-tensile steel"
  // front_suspension:"41mm hydraulic telescopic fork"
  // front_wheel_travel:"124 mm (4.9 inches)"
  // rear_suspension:"Horizontal back-link with adjustable spring preload"
  // rear_wheel_travel:"130 mm (5.1 inches)"
  // front_tire:"120/70-17 "
  // rear_tire:"160/60-17 "
  // front_brakes:"Double disc. Petal discs and two-piston calipers. Optional ABS. "
  // rear_brakes:"Single disc. Petal disc and single piston caliper. Optional ABS. "
  // seat_height:"790 mm (31.1 inches) If adjustable, lowest setting."
  // ground_clearance:"130 mm (5.1 inches)"
  // wheelbase:"1410 mm (55.5 inches)"
  // fuel_capacity:"15.14 litres (4.00 US gallons)"
  // starter:"Electric"
  // power:"52.3 HP (38.2 kW)) @ 8000 RPM"
  // torque:"56.0 Nm (5.7 kgf-m or 41.3 ft.lbs) @ 4000 RPM"
  // top_speed:null
  // fuel_consumption:null
  // emission:null
  // total_weight:"192.1 kg (423.4 pounds)"
  // total_height:"1146 mm (45.1 inches)"
  // total_length:"2055 mm (80.9 inches)"
  // total_width:"739 mm (29.1 inches)"
  // ignition:"TCBI with digital advance"
  // dry_weight:null
};

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
};