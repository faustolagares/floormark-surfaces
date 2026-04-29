import { ServiceData } from '../types';
import { 
  DollarSign, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Hammer,
  Clock,
  Layers,
  ClipboardCheck,
  LayoutGrid
} from 'lucide-react';

export const SERVICES: Record<string, ServiceData> = {
  'bathtub-refinishing': {
    id: 'bathtub-refinishing',
    title: 'Bathtub Refinishing',
    subtitle: 'Transformation, Not Replacement.',
    heroImage: '/regenerated_image_1777477919907.png',
    beforeImage: '/regenerated_image_1777480830623.png',
    afterImage: '/regenerated_image_1777480831872.png',
    problem: 'Worn, stained, or outdated bathtubs usually lead to expensive demolition.',
    solution: 'We restore the existing structure through a high-performance refinishing process, delivering a like-new finish in a fraction of the time.',
    benefitsTitle: 'The Intelligent Alternative',
    benefits: [
      {
        title: 'Cost Efficiency',
        description: 'Refinishing typically costs a fraction of full replacement.',
        icon: DollarSign
      },
      {
        title: 'Speed',
        description: 'Most projects are completed in just 1 to 2 days.',
        icon: Zap
      },
      {
        title: 'Durability',
        description: 'A professional finish that lasts many years with proper care.',
        icon: ShieldCheck
      },
      {
        title: 'No Demolition',
        description: 'Avoid mess, noise, and disruption inside your home.',
        icon: Hammer
      },
      {
        title: 'Aesthetic Transformation',
        description: 'Modern, clean, and perfectly smooth surfaces.',
        icon: Sparkles
      }
    ],
    process: [
      {
        title: 'Deep Cleaning',
        description: 'Full removal of residue, oils, and previous buildup.'
      },
      {
        title: 'Surface Repair',
        description: 'Mending chips, cracks, and structural imperfections.'
      },
      {
        title: 'Bonding',
        description: 'Application of specialized agents to ensure permanent adhesion.'
      },
      {
        title: 'Final Coating',
        description: 'Spray application of our high-performance architectural finish.'
      }
    ],
    outcomeDescription: 'We restore your bathtub to look like new, without removing it.',
    metaDescription: 'FloorMark Surfaces offers professional bathtub refinishing. Restore your bathtub to a like-new finish without the cost of replacement in just 1-2 days.',
    keywords: ['bathtub refinishing', 'tub restoration', 'bathroom remodel alternative', 'FloorMark Surfaces']
  },
  'ceramic-tile': {
    id: 'ceramic-tile',
    title: 'Ceramic Tile Refinishing',
    subtitle: 'Redefining the surface without removing it.',
    heroImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1563298723-dcf7a426f43e?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
    problem: 'Tile surfaces degrade over time: discolored colors, stained or moldy grout lines, and dull, worn finishes that make maintenance difficult.',
    solution: 'We transform your tile into a modern, seamless surface without removing it.',
    benefitsTitle: 'The Intelligent Alternative to Replacement',
    benefits: [
      {
        title: 'Cost Efficiency',
        description: 'Refinishing can reduce costs significantly compared to full tile replacement.',
        icon: DollarSign
      },
      {
        title: 'Speed',
        description: 'Most projects can be completed in as little as one day.',
        icon: Zap
      },
      {
        title: 'Visual Upgrade',
        description: 'Surfaces are transformed into a clean, modern, cohesive finish.',
        icon: Sparkles
      },
      {
        title: 'Seamless Surface',
        description: 'Grout lines become less prominent, improving both aesthetics and maintenance.',
        icon: Layers
      },
      {
        title: 'Low Disruption',
        description: 'No demolition, no debris, no extended downtime.',
        icon: ClipboardCheck
      }
    ],
    process: [
      {
        title: 'Deep Cleaning',
        description: 'Professional removal of grease, dirt, and buildup.'
      },
      {
        title: 'Surface Repair',
        description: 'Repair of chips and surface imperfections.'
      },
      {
        title: 'Grout Refinement',
        description: 'Refining grout lines for a uniform, consistent look.'
      },
      {
        title: 'Bonding',
        description: 'Application of high-performance bonding agents for adhesion.'
      },
      {
        title: 'New Coating',
        description: 'Spray application of a new durable architectural coating.'
      },
      {
        title: 'Finishing',
        description: 'Final curing process for a resilient, lasting finish.'
      }
    ],
    outcomeDescription: 'A FAST AND HIGH-IMPACT UPGRADE WITHOUT THE COST OF RENOVATION.',
    metaDescription: 'Update your ceramic tiles with FloorMark Surfaces. Our tile refinishing process eliminates moldy grout and outdated colors without demolition.',
    keywords: ['ceramic tile refinishing', 'tile restoration', 'grout sealing', 'bathroom tile update']
  },
  'countertop': {
    id: 'countertop',
    title: 'Countertop Refinishing',
    subtitle: 'Transformation through precision, not replacement.',
    heroImage: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e152748bd471?auto=format&fit=crop&q=80',
    problem: 'Countertops lose value over time: outdated colors, visible wear, scratches, or tile grout lines that trap dirt and make maintenance difficult.',
    solution: 'We transform your countertops into a modern, durable surface without replacing them.',
    benefitsTitle: 'The Intelligent Alternative to Renovation',
    benefits: [
      {
        title: 'Cost Efficiency',
        description: 'Refinishing can reduce costs by 30% to 50% compared to full replacement.',
        icon: DollarSign
      },
      {
        title: 'Speed',
        description: 'Most projects are completed in 1 to 2 days, with fast return to use.',
        icon: Zap
      },
      {
        title: 'Modern Aesthetic',
        description: 'Transform outdated surfaces into a clean, updated, high-end look.',
        icon: Sparkles
      },
      {
        title: 'Seamless Upgrade',
        description: 'Tile countertops can be converted into smoother, more cohesive surfaces.',
        icon: LayoutGrid
      },
      {
        title: 'Low Disruption',
        description: 'No demolition, no debris, no long renovation timelines.',
        icon: ClipboardCheck
      },
      {
        title: 'Durability',
        description: 'With proper care, refinished surfaces can last for many years.',
        icon: ShieldCheck
      }
    ],
    process: [
      {
        title: 'Deep Cleaning',
        description: 'Professional removal of grease, buildup, and residue.'
      },
      {
        title: 'Surface Repair',
        description: 'Mending chips, cracks, and surface imperfections.'
      },
      {
        title: 'Preparation',
        description: 'Surface conditioning for maximum finish adhesion.'
      },
      {
        title: 'Bonding',
        description: 'Application of high-performance bonding chemistry.'
      },
      {
        title: 'Architectural Coating',
        description: 'Spray application of our high-durability finish.'
      },
      {
        title: 'Final Finish',
        description: 'Curing and inspection for a flawless outcome.'
      }
    ],
    outcomeDescription: 'A HIGH-IMPACT, LOW-FRICTION UPGRADE FOR YOUR MOST VISIBLE SURFACES.',
    metaDescription: 'Transform your kitchen or bathroom countertops with FloorMark Surfaces refinishing. Durable, modern finishes at a fraction of the cost of replacement.',
    keywords: ['countertop refinishing', 'kitchen countertop restoration', 'bathroom vanity top', 'FloorMark']
  },
  'tile-shower': {
    id: 'tile-shower',
    title: 'Tile Shower & Shower Pan Refinishing',
    subtitle: 'Transformation through restoration, not replacement.',
    heroImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1620626011761-9963d7521476?auto=format&fit=crop&q=80',
    problem: 'Showers degrade faster than most surfaces: moldy, dark, or damaged grout lines, stained basins, and outdated finishes that make the bathroom feel old.',
    solution: 'We make your shower look brand new without replacing it.',
    benefitsTitle: 'The Smart Alternative to Full Shower Renovation',
    benefits: [
      {
        title: 'Cost Efficiency',
        description: 'Refinishing costs a fraction of full shower replacement.',
        icon: DollarSign
      },
      {
        title: 'Speed',
        description: 'Most showers are ready for use within 24 to 36 hours.',
        icon: Zap
      },
      {
        title: 'Visual Transformation',
        description: 'Outdated, stained showers become clean, bright, and modern.',
        icon: Sparkles
      },
      {
        title: 'Sealed Surface',
        description: 'Grout lines are sealed, reducing mold and simplifying cleaning.',
        icon: ShieldCheck
      },
      {
        title: 'Low Disruption',
        description: 'No demolition, no debris, no extended renovation time.',
        icon: ClipboardCheck
      }
    ],
    process: [
      {
        title: 'Deep Cleaning',
        description: 'Removal of soap residue, oils, and mineral buildup.'
      },
      {
        title: 'Structural Repair',
        description: 'Repair of chips, cracks, and surface damage.'
      },
      {
        title: 'Grout Sealing',
        description: 'Grout leveling and sealing for a uniform appearance.'
      },
      {
        title: 'Bonding Phase',
        description: 'Application of high-performance bonding chemistry.'
      },
      {
        title: 'Shower Coating',
        description: 'Spray application of a specialized high-performance finish.'
      },
      {
        title: 'Final Curing',
        description: 'Final finishing and curing for a resilient result.'
      }
    ],
    outcomeDescription: 'A CLEAN, UNIFORM, AND LIKE-NEW SHOWER WITHOUT THE MESS OF DEMOLITION.',
    metaDescription: 'Restore your tile shower and pan with FloorMark Surfaces. We seal grout lines and refinish surfaces for a clean, modern bathroom update.',
    keywords: ['tile shower refinishing', 'shower pan restoration', 'moldy grout fix', 'shower update']
  },
  'bathroom-vanity': {
    id: 'bathroom-vanity',
    title: 'Bathroom Vanity Refinishing',
    subtitle: 'High-impact upgrades without the renovation mess.',
    heroImage: 'https://images.unsplash.com/photo-1584622781514-f63f84527301?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1620626011761-9963d7521476?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80',
    problem: 'Bathroom vanities age quickly: outdated colors, stains, scratches, or dull sinks that impact the perception of the entire space.',
    solution: 'We make your bathroom vanity look brand new without replacing it.',
    benefitsTitle: 'The Intelligent Alternative to Renovation',
    benefits: [
      {
        title: 'Cost Efficiency',
        description: 'Refinishing can reduce costs by up to 50% compared to replacement.',
        icon: DollarSign
      },
      {
        title: 'Speed',
        description: 'Most projects are completed in 1 to 2 days.',
        icon: Zap
      },
      {
        title: 'Visual Upgrade',
        description: 'Outdated vanities are transformed into clean, modern surfaces.',
        icon: Sparkles
      },
      {
        title: 'Integrated Finish',
        description: 'Sink and countertop are refinished together for a cohesive look.',
        icon: Layers
      },
      {
        title: 'Low Disruption',
        description: 'No demolition, no plumbing changes, no construction delays.',
        icon: ClipboardCheck
      }
    ],
    process: [
      {
        title: 'Deep Cleaning',
        description: 'Removal of residue, buildup, and contaminants.'
      },
      {
        title: 'Precision Repair',
        description: 'Mending chips, cracks, and surface imperfections.'
      },
      {
        title: 'Adhesion Prep',
        description: 'Surface preparation for long-lasting finish bonding.'
      },
      {
        title: 'Bonding Agents',
        description: 'Application of high-performance bonding layers.'
      },
      {
        title: 'Vanity Coating',
        description: 'Spray application of our durable architectural finish.'
      },
      {
        title: 'Final Curing',
        description: 'Final finishing and curing for a resilient outcome.'
      }
    ],
    outcomeDescription: 'A MODERN RESULT WITHOUT THE COST, TIME, AND DISRUPTION OF REPLACEMENT.',
    metaDescription: 'Modernize your bathroom vanity with FloorMark Surfaces. Professional top and sink refinishing for a cohesive, updated look without plumbing changes.',
    keywords: ['vanity refinishing', 'bathroom vanity restoration', 'sink refinishing', 'bathroom update']
  },
  'tile-floor': {
    id: 'tile-floor',
    title: 'Tile Floor Refinishing',
    subtitle: 'Transformation through restoration, not replacement.',
    heroImage: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1502005075163-540bcaf430af?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80',
    problem: 'Tile floors degrade both visually and functionally: stained grout lines, dull surfaces, and hard-to-clean areas that retain dirt and make the space feel old.',
    solution: 'We make your tile floors look new again without replacing them.',
    benefitsTitle: 'The Intelligent Alternative to Floor Renovation',
    benefits: [
      {
        title: 'Cost Efficiency',
        description: 'Refinishing costs significantly less than full floor replacement.',
        icon: DollarSign
      },
      {
        title: 'Speed',
        description: 'Most projects are completed in 1 to 2 days, with fast return to use.',
        icon: Zap
      },
      {
        title: 'Modern Look',
        description: 'Outdated tile floors are transformed into clean, updated surfaces.',
        icon: Sparkles
      },
      {
        title: 'Sealed Grout',
        description: 'Grout lines are sealed, reducing dirt buildup and simplifying cleaning.',
        icon: ShieldCheck
      },
      {
        title: 'Low Disruption',
        description: 'No demolition, no debris, no long renovation timelines.',
        icon: ClipboardCheck
      },
      {
        title: 'Durability',
        description: 'The new finish is built to last with proper care.',
        icon: ShieldCheck
      }
    ],
    process: [
      {
        title: 'Deep Cleaning',
        description: 'Professional removal of dirt, grease, and buildup.'
      },
      {
        title: 'Floor Repair',
        description: 'Repair of cracks, chips, and surface imperfections.'
      },
      {
        title: 'Grout Correction',
        description: 'Grout leveling and correction for a uniform look.'
      },
      {
        title: 'Adhesion Prep',
        description: 'Surface preparation for maximum bonding strength.'
      },
      {
        title: 'Bonding Layer',
        description: 'Application of high-performance bonding agents.'
      },
      {
        title: 'Durable Coating',
        description: 'Spray application of our high-durability floor finish.'
      },
      {
        title: 'Final Curing',
        description: 'Finishing and curing for a resilient, long-lasting surface.'
      }
    ],
    outcomeDescription: 'A CLEAN, MODERN RESULT WITHOUT THE COST AND DISRUPTION OF FLOOR REPLACEMENT.',
    metaDescription: 'FloorMark Surfaces tile floor refinishing restores luster and seals grout. Get a durable, easy-to-clean floor without expensive replacement.',
    keywords: ['tile floor refinishing', 'floor restoration', 'grout sealing floors', 'FloorMark floors']
  },
  'fiberglass-bathtub': {
    id: 'fiberglass-bathtub',
    title: 'Fiberglass Bathtub Repair & Refinishing',
    subtitle: 'Structural restoration and surface transformation.',
    heroImage: 'https://images.unsplash.com/photo-1620626011761-9963d7521476?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80',
    problem: 'Fiberglass surfaces are prone to cracks, structural stress lines, and soft bottoms that can lead to leaks and expensive replacement.',
    solution: 'We repair and refinish your bathtub, making it look and feel like new without replacing it.',
    benefitsTitle: 'The Smart Alternative to Bathroom Demolition',
    benefits: [
      {
        title: 'Cost Efficiency',
        description: 'Repair and refinishing can save up to 70% compared to full replacement.',
        icon: DollarSign
      },
      {
        title: 'Structural Restoration',
        description: 'Damaged or weakened areas are reinforced and rebuilt.',
        icon: Hammer
      },
      {
        title: 'Speed',
        description: 'Most projects are completed in 2 to 3 days.',
        icon: Zap
      },
      {
        title: 'Visual Transformation',
        description: 'Cracked and worn tubs become clean, smooth, and modern.',
        icon: Sparkles
      },
      {
        title: 'Low Disruption',
        description: 'No demolition, no plumbing removal, no extended construction.',
        icon: ClipboardCheck
      }
    ],
    process: [
      {
        title: 'Damage Inspection',
        description: 'Identification of structural cracks and surface weak points.'
      },
      {
        title: 'Structural Repair',
        description: 'Reinforcement using high-grade fiberglass materials.'
      },
      {
        title: 'Base Rebuilding',
        description: 'Leveling and strengthening of the tub or shower base.'
      },
      {
        title: 'Adhesion Prep',
        description: 'Surface preparation for chemical bonding.'
      },
      {
        title: 'Bonding Agents',
        description: 'Application of industrial-strength bonding primers.'
      },
      {
        title: 'Finishing Coating',
        description: 'Spray application of a durable architectural finish.'
      },
      {
        title: 'Final Detail',
        description: 'Curing and final finishing for a permanent result.'
      }
    ],
    outcomeDescription: 'STRUCTURAL INTEGRITY RESTORED WITH A FLAWLESS, LIKE-NEW SURFACE.',
    metaDescription: 'Specialized fiberglass bathtub repair and refinishing by FloorMark Surfaces. We fix cracks and reinforce weak bottoms for a like-new finish.',
    keywords: ['fiberglass tub repair', 'crack repair bathtub', 'bathtub reinforcement', 'fiberglass restoration']
  },
  'cabinet-refinishing': {
    id: 'cabinet-refinishing',
    title: 'Cabinet Refinishing & Refacing',
    subtitle: 'A completely new look without the replacement cost.',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e152748bd471?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1510440299863-c7d177701af3?auto=format&fit=crop&q=80',
    problem: 'Cabinets dominate the visual identity of a space, but full replacement is slow, messy, and incredibly expensive.',
    solution: 'We give your cabinets a completely new look without replacing them.',
    benefitsTitle: 'The Intelligent Alternative to Remodeling',
    benefits: [
      {
        title: 'Cost Efficiency',
        description: 'Save up to 60% to 70% compared to full cabinet replacement.',
        icon: DollarSign
      },
      {
        title: 'Speed',
        description: 'Projects are completed in days, not weeks.',
        icon: Zap
      },
      {
        title: 'Visual Transformation',
        description: 'Completely updated kitchen or bathroom without structural changes.',
        icon: Sparkles
      },
      {
        title: 'Minimal Disruption',
        description: 'No demolition, no major construction, no extended downtime.',
        icon: ClipboardCheck
      },
      {
        title: 'Flexibility',
        description: 'Choose between restoring the current look or fully updating the style.',
        icon: Layers
      },
      {
        title: 'Durability',
        description: 'Professional finishes built to last longer than DIY solutions.',
        icon: ShieldCheck
      }
    ],
    process: [
      {
        title: 'Deep Preparation',
        description: 'Cleaning and surface prep for maximum finish durability.'
      },
      {
        title: 'Surface Correction',
        description: 'Precision sanding and repair of any woodwork imperfections.'
      },
      {
        title: 'Component Update',
        description: 'Removal or replacement of doors and drawer fronts if refacing.'
      },
      {
        title: 'Architectural Finish',
        description: 'Application of high-quality, durable cabinet coatings.'
      },
      {
        title: 'Detailing',
        description: 'Hardware installation and final adjustments.'
      },
      {
        title: 'Final Reveal',
        description: 'Curing and final inspection for a flawless workspace transformation.'
      }
    ],
    outcomeDescription: 'A HIGH-IMPACT VISUAL UPGRADE DELIVERED WITH SPEED AND PRECISION.',
    metaDescription: 'Upgrade your kitchen with FloorMark Surfaces cabinet refinishing and refacing. A completely new look without the cost or mess of a full remodel.',
    keywords: ['cabinet refinishing', 'cabinet refacing', 'kitchen update', 'cabinet painting professional']
  }
};
