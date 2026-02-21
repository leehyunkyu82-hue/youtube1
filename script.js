const labels = [
  '2/15 08:00',
  '2/15 12:00',
  '2/15 18:00',
  '2/16 00:00',
  '2/16 12:00',
  '2/17 00:00',
  '2/18 00:00',
  '2/19 00:00',
  '2/20 21:00',
];

const views = [0, 29000, 41000, 47000, 53000, 56000, 60000, 63000, 65962];

new Chart(document.getElementById('viewsTrend'), {
  type: 'line',
  data: {
    labels,
    datasets: [
      {
        label: '누적 조회수',
        data: views,
        borderColor: '#2f6bcc',
        backgroundColor: 'rgba(47,107,204,0.15)',
        fill: false,
        tension: 0.35,
        pointRadius: 2.2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          callback: (v) => `${Math.round(v / 1000)}k`,
        },
      },
    },
  },
});

new Chart(document.getElementById('sentimentDonut'), {
  type: 'doughnut',
  data: {
    labels: ['긍정', '부정', '중립'],
    datasets: [
      {
        data: [40.8, 34, 25.2],
        backgroundColor: ['#10b981', '#ef4444', '#5465d8'],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '52%',
    plugins: {
      legend: {
        position: 'right',
      },
    },
  },
});

new Chart(document.getElementById('categoryBar'), {
  type: 'bar',
  data: {
    labels: ['국민연금 조직', '연금제도', '국내주식', '기타', '퇴직연금', '주택투자', '주주권행사', '해외투자'],
    datasets: [
      {
        label: '긍정',
        data: [29, 12, 0, 6, 5, 2, 0, 0],
        backgroundColor: '#10b981',
      },
      {
        label: '부정',
        data: [14, 9, 17, 3, 4, 1, 4, 0],
        backgroundColor: '#ef4444',
      },
      {
        label: '중립',
        data: [8, 7, 7, 10, 3, 1, 0, 1],
        backgroundColor: '#5465d8',
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  },
});
