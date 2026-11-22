const SAMPLE_ADDRESSES = [
  {
    address_id: 'ADR-002',
    road_address_en: '10, Donggyo-ro 51-gil, Mapo-gu, Seoul',
    road_address_ko: '서울특별시 마포구 동교로51길 10',
    building_name_en: 'Hanbit Village Complex 2 Apt.',
    building_name_ko: '한빛마을2단지아파트',
    district_en: 'Mapo-gu',
    district_ko: '마포구'
  },
  {
    address_id: 'ADR-001',
    road_address_en: '25, World Cup buk-ro 4-gil, Mapo-gu, Seoul',
    road_address_ko: '서울특별시 마포구 월드컵북로4길 25',
    building_name_en: 'Yeonnam Green Villa',
    building_name_ko: '연남그린빌라',
    district_en: 'Mapo-gu',
    district_ko: '마포구'
  }
];

const PRESET_TRANSLATIONS = {
  'Leave at door and ring doorbell': '문 앞에 두고 벨을 눌러주세요',
  'Leave with security / guard': '경비실에 맡겨주세요',
  'Hand it to me directly': '직접 전달해 주세요',
  "Don't ring the bell, knock lightly": '벨 누르지 말고 가볍게 노크해 주세요'
};

async function loadAddresses() {
  try {
    const res = await fetch('./data/B1_sample_addresses.json');
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data.addresses || SAMPLE_ADDRESSES;
  } catch (e) {
    return SAMPLE_ADDRESSES;
  }
}

function getOrderState() {
  const raw = localStorage.getItem('lieferoo_order');
  return raw ? JSON.parse(raw) : null;
}

function saveOrderState(data) {
  const current = getOrderState() || {};
  const updated = { ...current, ...data };
  localStorage.setItem('lieferoo_order', JSON.stringify(updated));
  return updated;
}