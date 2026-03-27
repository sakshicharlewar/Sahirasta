/**
 * Mock Commute Service for SahiRasta
 */

export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  // Approximate km using simple formula
  const distance = Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(lng1 - lng2, 2)) * 110;
  return distance;
};

export const calculateTravelTime = (distance, mode) => {
  const speeds = {
    car: 40,
    bike: 20,
    bus: 15,
    metro: 35,
    walk: 5
  };

  const speed = speeds[mode] || 25;
  const baseTime = (distance / speed) * 60; // minutes
  
  // Add random traffic factor (1.0 to 1.5)
  const trafficFactor = 1 + Math.random() * 0.5;
  return Math.round(baseTime * trafficFactor);
};

export const calculateAllCommuteTimes = (propLat, propLng, workplaceLat, workplaceLng) => {
  const distance = calculateDistance(propLat, propLng, workplaceLat, workplaceLng);
  return {
    car: calculateTravelTime(distance, 'car'),
    bike: calculateTravelTime(distance, 'bike'),
    bus: calculateTravelTime(distance, 'bus'),
    metro: calculateTravelTime(distance, 'metro'),
    walk: calculateTravelTime(distance, 'walk')
  };
};

export const calculateCommuteScore = (travelTime, congestion = 0.3, dependability = true) => {
  // CommuteScore = 100 - (0.5 * timePenalty + 0.3 * congestion + 0.2 * reliability)
  const timePenalty = Math.max(0, travelTime - 10) * 2; // Penalty starts after 10 mins
  const reliability = dependability ? 0 : 50;
  
  const score = 100 - (0.5 * timePenalty + 0.3 * (congestion * 100) + 0.2 * reliability);
  return Math.max(0, Math.min(100, Math.round(score)));
};
