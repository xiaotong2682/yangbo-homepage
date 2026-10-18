// 公开资料核对日期：2026-10-17。来源见 sources.md；学生去向由网站委托人确认。
window.ACADEMIC_PROFILE = {
  "name": "杨博吧啵啵啵啵啵啵啵啵啵啵啵啵宝宝",
  "englishName": "Bo Yang",
  "title": "副教授，硕士生导师",
  "university": "南京信息工程大学",
  "department": "人工智能学院（未来技术学院）",
  "laboratory": "智能机器人自主感知、定位与导航",
  "email": "003402@nuist.edu.cn",
  "address": "临江楼A1916",
  "homepage": "https://faculty.nuist.edu.cn/yangbo1234/zh_CN/index.htm",
  "biography": "杨博，南京信息工程大学人工智能学院（未来技术学院）副教授、硕士生导师，元宇宙工程系副主任。于东南大学获工学博士学位，博士期间在加拿大阿尔伯塔大学联合培养。2020年加入南京信息工程大学人工智能学院。",
  "mentoring": "长期聚焦机器人自主感知与导航，围绕视觉、惯性、超宽带(UWB)及三维激光雷达等传感信息开展融合与定位研究。最近同时开展多模态核磁共振图像的重建与合成算法。",
  "alumni": [
    {
      "year": "2027",
      "expected": true,
      "name": "朱逸轩",
      "degree": "本科",
      "destination": "电子科技大学 · 硕士（推免）"
    },
    {
      "year": "2027",
      "expected": true,
      "name": "张文杰",
      "degree": "本科",
      "destination": "北京航空航天大学 · 硕士（推免）"
    },
    {
      "year": "2026",
      "name": "王昱",
      "degree": "本科",
      "destination": "山东大学 · 硕士（推免）"
    },
    {
      "year": "2026",
      "name": "孙铭",
      "degree": "本科",
      "destination": "南方科技大学 · 硕士（推免）"
    },
    {
      "year": "2026",
      "name": "周锦诚",
      "degree": "本科",
      "destination": "纽约大学 · 硕士"
    },
    {
      "year": "2025",
      "name": "何思稹",
      "degree": "本科",
      "destination": "剑桥大学 · 硕士"
    }
  ],
  "papers": [
    {
      "id": "sun2026diffusion",
      "year": "2026",
      "image": "assets/sun2026diffusion-architecture.png",
      "description": "通过多模态扩散模型重建缺失与含噪的 UWB 测距，再进行位置估计。",
      "title": "Accurate and Robust UWB Localization With Incomplete Measurements Based on Multi-Modal Diffusion Model",
      "authors": [
        "Ming Sun",
        "Yu Wang",
        "Bo Yang",
        "Li He",
        "Hong Zhang"
      ],
      "venue": "IEEE Transactions on Automation Science and Engineering",
      "doi": "10.1109/tase.2026.3662003",
      "url": "https://doi.org/10.1109/tase.2026.3662003",
      "type": "article",
      "volume": "23",
      "pages": "4532-4544",
      "imageKind": "original",
      "alt": "Diff-ULoc：测量预处理、多模态重建、位置估计与训练损失的整体流程。",
      "abstract": "针对复杂场景中的 UWB 测量缺失与噪声，Diff-ULoc 先对距离和 RSSI 信号进行预处理，再通过辅助编码器与去噪 U-Net 构成的多模态重建模型恢复测距信息，最后利用 CNN-LSTM 估计位置。训练同时结合距离重建与位置估计损失。"
    },
    {
      "id": "yang2025heterogeneous",
      "year": "2025",
      "image": "assets/yang2025heterogeneous-architecture.png",
      "imageKind": "original",
      "description": "将基站、测距与标签建模为异构图，联合提取时空特征与几何关系。",
      "abstract": "将 UWB 基站、测距和标签组织成时空异构图，通过元路径聚合与时空异构图注意力网络提取特征，再回归标签位置与修正后的测距。训练结合位置、距离和基站信息定义损失，并在真实室内场景中验证。",
      "pdf": "https://events.infovaya.com/uploads/documents/pdfviewer/ed/87/202733-1235.pdf",
      "title": "Heterogeneous Graph Network-Based UWB Localization for Complex Indoor Environments",
      "authors": [
        "Bo Yang",
        "Luyang Li",
        "Sizhen He",
        "Weinan Chen",
        "Hong Zhang"
      ],
      "venue": "2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
      "doi": "10.1109/iros60139.2025.11246811",
      "url": "https://doi.org/10.1109/iros60139.2025.11246811",
      "type": "inproceedings",
      "pages": "8886-8893",
      "alt": "异构图 UWB 定位：输入数据、异构图构建、STHGAN 特征提取、回归与训练流程。",
      "imageLayout": "portrait"
    },
    {
      "id": "wang2025crossattention",
      "year": "2025",
      "image": "assets/wang2025crossattention-architecture.png",
      "description": "利用交叉注意力机制融合 RSSI 与测距信号，开展 UWB 室内定位。",
      "title": "Fusing Both RSSI and Distance Signal for UWB Indoor Localization via Cross Attention Mechanism",
      "authors": [
        "Yu Wang",
        "Bo Yang",
        "Ming Sun",
        "Hao Jiang"
      ],
      "venue": "IEEE Wireless Communications Letters",
      "doi": "10.1109/lwc.2025.3574870",
      "url": "https://doi.org/10.1109/lwc.2025.3574870",
      "type": "article",
      "volume": "14",
      "issue": "8",
      "pages": "2526-2530",
      "imageKind": "original",
      "alt": "CAUL-Net：距离与 RSSI 双分支卷积、交叉注意力融合、LSTM 与位置预测。",
      "abstract": "CAUL-Net 分别使用两个卷积分支提取测距与 RSSI 的特征，通过交叉注意力融合模块学习两类信号之间的互补关系，再利用 LSTM 提取时间特征，经过全连接层预测标签位置。方法在多种真实室内环境中进行了评估。"
    },
    {
      "id": "he2025graph",
      "year": "2025",
      "image": "assets/he2025graph-architecture.png",
      "description": "通过图网络学习时空信息与几何特征，用于 UWB 定位。",
      "title": "Graph Network-Based UWB Localization via Learning Spatial-Temporal and Geometric Features",
      "authors": [
        "Sizhen He",
        "Bo Yang",
        "Tao Liu",
        "Jun Li"
      ],
      "venue": "IEEE Communications Letters",
      "doi": "10.1109/lcomm.2025.3543434",
      "url": "https://doi.org/10.1109/lcomm.2025.3543434",
      "type": "article",
      "volume": "29",
      "issue": "4",
      "pages": "784-788",
      "imageKind": "original",
      "alt": "Graph-ARNN：时空图构建、图卷积、图注意力、深度循环网络与位置回归。",
      "abstract": "Graph-ARNN 将多时刻的 UWB 测距与基站位置构建为时空图，依次通过图卷积、图注意力与深度循环网络学习空间、几何和时间特征，最终由全连接层回归标签位置，并采用监督学习训练。"
    },
    {
      "id": "chen2025optimization",
      "year": "2025",
      "image": "assets/chen2025optimization-architecture.png",
      "imageKind": "original",
      "description": "结合多个 UWB 标签之间的几何约束，同时估计移动机器人的位置与旋转。",
      "abstract": "采用多个 UWB 标签开展机器人位姿估计，将测距约束、标签间几何约束以及位置与旋转的平滑约束纳入优化框架，同时估计机器人位置与旋转，并通过仿真和真实实验评估方法。",
      "pdf": "https://journal.hep.com.cn/bir/EN/PDF/10.1016/j.birob.2025.100210",
      "title": "Optimization-based UWB positioning with multiple tags for estimating position and rotation simultaneously",
      "authors": [
        "Hao Chen",
        "Bo Yang",
        "Luyang Li",
        "Tao Liu",
        "Jiacheng Zhang",
        "Ying Zhang"
      ],
      "venue": "Biomimetic Intelligence and Robotics",
      "doi": "10.1016/j.birob.2025.100210",
      "url": "https://doi.org/10.1016/j.birob.2025.100210",
      "type": "article",
      "volume": "5",
      "issue": "2",
      "pages": "100210",
      "alt": "多标签 UWB 位姿优化：测距、标签间几何关系以及位置与旋转平滑约束。"
    },
    {
      "id": "he2024multitag",
      "year": "2024",
      "image": "assets/he2024multitag-architecture.png",
      "description": "以多标签测距构建时空图，通过时空注意力图网络联合估计位置与距离。",
      "title": "Multi-Tag UWB Localization With Spatial–Temporal Attention Graph Neural Network",
      "authors": [
        "Sizhen He",
        "Bo Yang",
        "Tao Liu",
        "Hong Zhang"
      ],
      "venue": "IEEE Transactions on Instrumentation and Measurement",
      "doi": "10.1109/tim.2024.3462984",
      "url": "https://doi.org/10.1109/tim.2024.3462984",
      "type": "article",
      "volume": "73",
      "pages": "1-12",
      "imageKind": "original",
      "alt": "STA-GNN-M：多标签时空图、时空注意力模块、回归与联合损失。",
      "abstract": "STA-GNN-M 利用多个标签的连续测距与基站位置构建时空图，通过时间门控卷积、空间图卷积与自注意力模块提取特征，再回归标签位置和测距。训练采用位置、距离、估计及多标签几何约束等联合损失。"
    }
  ],
  "projects": [
    {
      "name": "面向室内自主定位的多源异构信息深度融合与在线适应方法研究",
      "role": "主持",
      "source": "https://www.medsci.cn/sci/nsfc_show.do?id=10a11431883f0",
      "category": "国家自然科学基金青年科学基金项目",
      "number": "62303230",
      "period": "2024.01—2026.12",
      "funding": "30万元",
      "approvedYear": "2023"
    },
    {
      "name": "江苏省高等学校自然科学研究面上项目",
      "role": "主持",
      "source": "https://faculty.nuist.edu.cn/yangbo1234/zh_CN/index.htm"
    },
    {
      "name": "企业横向项目",
      "role": "主持",
      "source": "https://faculty.nuist.edu.cn/yangbo1234/zh_CN/index.htm"
    },
    {
      "name": "江苏省双创博士项目",
      "role": "主持",
      "source": "https://rsc.nuist.edu.cn/lslt/vryznxtyjtd/list.psp"
    },
    {
      "name": "国家自然科学基金面上项目",
      "role": "参与",
      "source": "https://rsc.nuist.edu.cn/lslt/vryznxtyjtd/list.psp"
    }
  ],
  "patents": [
    {
      "title": "基于改进双延迟深度确定性策略的自监督超宽带定位方法",
      "inventors": [
        "朱逸轩",
        "杨博"
      ],
      "number": "CN121099418B",
      "status": "已授权",
      "date": "2026-08-21",
      "assignee": "Nanjing University of Information Science and Technology",
      "url": "https://patents.google.com/patent/CN121099418B/zh",
      "sourceStatus": "Active"
    },
    {
      "title": "狭窄巷道小车巡检的无人机UWB增强定位图优化方法",
      "inventors": [
        "朱逸轩",
        "杨博"
      ],
      "number": "CN121547729B",
      "status": "已授权",
      "date": "2026-03-31",
      "assignee": "Nanjing University of Information Science and Technology",
      "url": "https://patents.google.com/patent/CN121547729B/zh",
      "sourceStatus": "Active"
    },
    {
      "title": "基于2D相机和3D相机标定的多通道融合图生成方法",
      "inventors": [
        "孙文赟",
        "薛宇恒",
        "葛希斋",
        "李春彪",
        "杨博"
      ],
      "number": "CN116503298B",
      "status": "已授权",
      "date": "2025-11-18",
      "assignee": "Nanjing University of Information Science and Technology",
      "url": "https://patents.google.com/patent/CN116503298B/zh",
      "sourceStatus": "Active"
    },
    {
      "title": "一种基于状态空间模型的多标签超宽带传感器定位方法",
      "inventors": [
        "张文杰",
        "杨博",
        "王昱",
        "孙铭",
        "陈浩"
      ],
      "number": "CN119893671B",
      "status": "已授权",
      "date": "2025-07-04",
      "assignee": "Nanjing University of Information Science and Technology",
      "url": "https://patents.google.com/patent/CN119893671B/zh",
      "sourceStatus": "Active"
    },
    {
      "title": "一种基于多模态扩散模型的超宽带室内定位方法",
      "inventors": [
        "孙铭",
        "杨博",
        "王昱",
        "杨溢"
      ],
      "number": "CN119907098B",
      "status": "已授权",
      "date": "2025-07-04",
      "dateLabel": "授权公告",
      "assignee": "南京信息工程大学",
      "url": "https://patents.google.com/patent/CN119907098B/zh"
    },
    {
      "title": "一种三维多模态核磁共振图像重建方法",
      "inventors": [
        "王昱",
        "杨博",
        "周锦诚",
        "陈宇辰",
        "周蕾蕾"
      ],
      "number": "CN119152125B",
      "status": "已授权",
      "date": "2025-01-24",
      "assignee": "Nanjing University of Information Science and Technology",
      "url": "https://patents.google.com/patent/CN119152125B/zh",
      "sourceStatus": "Active"
    },
    {
      "title": "一种基于异构图和注意力机制的超宽带室内定位方法",
      "inventors": [
        "杨博",
        "李鹭洋",
        "何思稹",
        "陈浩"
      ],
      "number": "CN118984489A",
      "status": "已公开",
      "date": "2024-08-06",
      "assignee": "Nanjing University of Information Science and Technology",
      "url": "https://patents.google.com/patent/CN118984489A/zh",
      "sourceStatus": "Pending"
    },
    {
      "title": "一种基于SINS/GPS和里程计辅助的视觉SLAM方法",
      "inventors": [
        "徐晓苏",
        "杨博",
        "代维"
      ],
      "number": "CN106780699B",
      "status": "已授权 · 已失效",
      "date": "2020-10-16",
      "assignee": "Southeast University",
      "url": "https://patents.google.com/patent/CN106780699B/zh",
      "sourceStatus": "Expired - Fee Related"
    },
    {
      "title": "一种基于流形学习与改进支持向量机的室内定位方法",
      "inventors": [
        "徐晓苏",
        "吴晓飞",
        "闫琳宇",
        "杨博"
      ],
      "number": "CN106604229B",
      "status": "已授权",
      "date": "2020-02-18",
      "assignee": "Southeast University",
      "url": "https://patents.google.com/patent/CN106604229B/zh",
      "sourceStatus": "Active"
    },
    {
      "title": "一种基于遗传算法的视觉惯性组合的SLAM方法",
      "inventors": [
        "徐晓苏",
        "代维",
        "杨博"
      ],
      "number": "CN106679648B",
      "status": "已授权",
      "date": "2019-12-10",
      "assignee": "Southeast University",
      "url": "https://patents.google.com/patent/CN106679648B/zh",
      "sourceStatus": "Active"
    },
    {
      "title": "一种基于五阶CKF的GPS/SINS/CNS组合导航方法",
      "inventors": [
        "徐晓苏",
        "刘心雨",
        "孙进",
        "杨博",
        "王捍兵"
      ],
      "number": "CN105737823B",
      "status": "已授权 · 已失效",
      "date": "2018-09-21",
      "assignee": "Southeast University",
      "url": "https://patents.google.com/patent/CN105737823B/zh",
      "sourceStatus": "Expired - Fee Related"
    },
    {
      "title": "基于SRQKF的SINS/DVL水下大失准角对准方法",
      "inventors": [
        "徐晓苏",
        "杨博",
        "徐祥",
        "周峰",
        "王捍兵",
        "田泽鑫"
      ],
      "number": "CN105806363B",
      "status": "已授权",
      "date": "2018-08-21",
      "assignee": "Southeast University",
      "url": "https://patents.google.com/patent/CN105806363B/zh",
      "sourceStatus": "Active"
    },
    {
      "title": "一种采用基于粒子群优化的CKF的惯性/视觉组合导航方法",
      "inventors": [
        "徐晓苏",
        "闫琳宇",
        "吴晓飞",
        "杨博"
      ],
      "number": "CN106767791A",
      "status": "已公开",
      "date": "2017-01-13",
      "assignee": "Southeast University",
      "url": "https://patents.google.com/patent/CN106767791A/zh",
      "sourceStatus": "Pending"
    }
  ],
  "competitions": [
    {
      "year": "2025",
      "title": "RAICOM 睿抗机器人开发者大赛",
      "track": "全国总决赛 · 平安城市",
      "award": "全国一等奖",
      "students": [
        "王昱",
        "孙铭",
        "张文杰",
        "朱世杰"
      ],
      "advisors": [
        "杨博",
        "张瑞东"
      ],
      "source": "https://raicom.com.cn/content.html?cid=1518",
      "pdf": "https://raicom-caia1caim2.oss-cn-hangzhou.aliyuncs.com/29847c3dde824c248a349a00e8a4ecd1.pdf",
      "sourcePage": 1,
      "sourceRow": 15
    },
    {
      "year": "2025",
      "title": "第七届全球校园人工智能算法精英大赛",
      "track": "算法挑战赛道总决赛",
      "award": "全国二等奖",
      "students": [
        "张文杰",
        "施一凡",
        "谢一涵"
      ],
      "advisors": [
        "杨博",
        "杨强"
      ],
      "source": "https://faculty.nuist.edu.cn/yangqiang/zh_CN/index.htm"
    },
    {
      "year": "2024",
      "title": "RAICOM 睿抗机器人开发者大赛",
      "track": "全国总决赛 · 平安城市（本科组）",
      "award": "全国三等奖",
      "students": [
        "王昱",
        "林啸",
        "陈祾熙",
        "陈启贤"
      ],
      "advisors": [
        "杨博",
        "李春彪"
      ],
      "source": "https://raicom.com.cn/content.html?cid=1007",
      "pdf": "https://raicom-caia1caim2.oss-cn-hangzhou.aliyuncs.com/776aa4ef1d814cfe88e32ae6f71bf3aa.pdf",
      "sourcePage": 3,
      "sourceRow": 62
    },
    {
      "year": "2024",
      "title": "RAICOM 睿抗机器人开发者大赛",
      "track": "全国总决赛 · 平安城市（本科组）",
      "award": "全国三等奖",
      "students": [
        "王志豪",
        "宫昌昊",
        "陆佳宁",
        "陈思语"
      ],
      "advisors": [
        "杨博",
        "李春彪"
      ],
      "source": "https://raicom.com.cn/content.html?cid=1007",
      "pdf": "https://raicom-caia1caim2.oss-cn-hangzhou.aliyuncs.com/776aa4ef1d814cfe88e32ae6f71bf3aa.pdf",
      "sourcePage": 4,
      "sourceRow": 81
    }
  ]
};
