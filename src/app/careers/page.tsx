import React from 'react';
import styles from './page.module.scss';
import { Briefcase, DollarSign, MapPin, Clock, Coffee, Zap, Users, GraduationCap } from 'lucide-react';
import PageBanner from '../component/PageBanner/PageBanner';

// Dữ liệu mẫu (Sau này có thể lấy từ API)
const jobs = [
  {
    id: 1,
    title: "Video Editor (YouTube)",
    department: "Phòng Sản Xuất",
    location: "Bắc Giang",
    type: "Full-time",
    salary: "10 - 15 Triệu",
    deadline: "30/12/2024"
  },
  {
    id: 2,
    title: "Content Creator / Biên tập",
    department: "Phòng Sáng Tạo",
    location: "Bắc Giang",
    type: "Full-time",
    salary: "8 - 12 Triệu",
    deadline: "15/01/2025"
  },
  {
    id: 3,
    title: "Chuyên viên SEO Youtube",
    department: "Phòng Marketing",
    location: "Remote / Online",
    type: "Part-time",
    salary: "Thỏa thuận",
    deadline: "Liên tục tuyển"
  },
  {
    id: 4,
    title: "Thực tập sinh Media",
    department: "Đào tạo",
    location: "Bắc Giang",
    type: "Internship",
    salary: "Hỗ trợ + Thưởng",
    deadline: "Liên tục tuyển"
  }
];

export default function CareersPage() {
  return (
    <main className={styles.wrapper}>
      <PageBanner 
        title="Tuyển Dụng" 
        subtitle="Gia nhập Sano Media - Nơi đam mê kiến tạo giá trị" 
      />

      {/* --- 1. QUYỀN LỢI (BENEFITS) --- */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Tại sao chọn Sano?</h2>
          <p className={styles.sectionDesc}>
            Chúng tôi không chỉ mang đến một công việc, mà là một sự nghiệp. 
            Tại Sano Media, con người là trung tâm của mọi sự phát triển.
          </p>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.icon}><DollarSign /></div>
              <h4>Thu nhập hấp dẫn</h4>
              <p>Mức lương cạnh tranh, thưởng dự án, thưởng nóng và thưởng cuối năm dựa trên hiệu quả.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}><GraduationCap /></div>
              <h4>Đào tạo chuyên sâu</h4>
              <p>Được tham gia các khóa học về YouTube, MMO và tư duy phát triển bản thân hàng tháng.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}><Coffee /></div>
              <h4>Môi trường Hạnh phúc</h4>
              <p>Văn hóa làm việc cởi mở, tôn trọng. Tea-break hàng ngày, Team building hàng quý.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}><Zap /></div>
              <h4>Cơ hội thăng tiến</h4>
              <p>Lộ trình công danh rõ ràng. Cơ hội trở thành Leader hoặc Quản lý dự án sau 6 tháng.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}><Users /></div>
              <h4>Đồng nghiệp tài năng</h4>
              <p>Làm việc cùng những người trẻ, năng động và là chuyên gia trong lĩnh vực MMO.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.icon}><Briefcase /></div>
              <h4>Thiết bị hiện đại</h4>
              <p>Được trang bị PC cấu hình cao, không gian làm việc sáng tạo và đầy đủ tiện nghi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. QUY TRÌNH (PROCESS) --- */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div style={{textAlign: 'center'}}>
             <h2 className={styles.sectionTitle}>Quy trình ứng tuyển</h2>
             <p className={styles.sectionDesc}>Minh bạch - Nhanh chóng - Chuyên nghiệp</p>
          </div>

          <div className={styles.stepsWrapper}>
             <div className={styles.stepItem}>
               <div className={styles.stepNum}>1</div>
               <h5>Gửi hồ sơ</h5>
               <span>Email / Form Online</span>
             </div>
             <div className={styles.stepItem}>
               <div className={styles.stepNum}>2</div>
               <h5>Sơ loại</h5>
               <span>HR liên hệ trong 24h</span>
             </div>
             <div className={styles.stepItem}>
               <div className={styles.stepNum}>3</div>
               <h5>Phỏng vấn</h5>
               <span>Trao đổi chuyên môn</span>
             </div>
             <div className={styles.stepItem}>
               <div className={styles.stepNum}>4</div>
               <h5>Nhận việc</h5>
               <span>Onboarding & Đào tạo</span>
             </div>
          </div>
        </div>
      </section>

      {/* --- 3. VIỆC LÀM ĐANG TUYỂN (JOBS LIST) --- */}
      <section className={styles.jobsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{textAlign: 'center', marginBottom: '50px'}}>
             Vị trí đang mở
          </h2>

          <div className={styles.jobsList}>
            {jobs.map((job) => (
              <div key={job.id} className={styles.jobItem}>
                <div className={styles.jobInfo}>
                  <h3>{job.title}</h3>
                  <div className={styles.meta}>
                    <span><Briefcase size={16}/> {job.department}</span>
                    <span><MapPin size={16}/> {job.location}</span>
                    <span><Clock size={16}/> {job.type}</span>
                  </div>
                </div>
                
                <div className={styles.jobAction}>
                  <div className={styles.salary}>{job.salary}</div>
                  <button className={styles.applyBtn}>Ứng tuyển ngay</button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Thông báo nếu không tìm thấy job */}
          <div style={{textAlign: 'center', marginTop: '40px', color: '#666'}}>
             <p>Không tìm thấy vị trí phù hợp? Gửi CV của bạn về <strong>sanomediavn@gmail.com</strong></p>
             <p>Chúng tôi sẽ liên hệ khi có cơ hội mới.</p>
          </div>

        </div>
      </section>

    </main>
  );
}