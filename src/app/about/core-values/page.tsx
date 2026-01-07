"use client";

import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { IMAGES } from '../../constants/images';
import { BookOpen, Lightbulb, ShieldCheck, Rocket, XCircle, AlertTriangle, Gem, TrendingUp, MessageSquare, Users, Trophy } from 'lucide-react';

export default function CoreValuesPage() {
  return (
    <main className={styles.wrapper}>
      
      {/* 1. HERO BANNER */}
      <section className={styles.heroSection}>
        <div className={styles.bgImage}>
           <Image 
             src={IMAGES.ABOUT.BANNER} // Ảnh văn phòng/team
             alt="Core Values Hero" 
             fill 
             priority
           />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.label}>DNA Của Sano Media</span>
          <h1>Giá trị cốt lõi</h1>
          <p>
            4 nguyên tắc vàng định hình tư duy, hành động và 6 giá trị văn hóa cốt lõi <br/>
            của mỗi thành viên trong đại gia đình Sano.
          </p>
        </div>
      </section>

      {/* 2. VALUES LIST */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          
          <div className={styles.introText}>
            <h2>Bộ gen của người dẫn đầu</h2>
            <p>
              Để hiện thực hóa tầm nhìn 2030, chúng tôi không chỉ dựa vào chiến lược, 
              mà dựa vào sự đồng lòng của tập thể mang chung một bộ gen văn hóa.
            </p>
          </div>

          <div className={styles.valuesList}>
            
            {/* VALUE 1: CON NGƯỜI */}
            <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image 
                quality={70}
                  src="https://i.ibb.co/JVdjz1S/585460997-844318591689261-6580625915479593595-n-1.jpg" // Ảnh học tập/làm việc
                  alt="People" fill 
                />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>01</span>
                <div className={styles.iconWrapper}><BookOpen /></div>
                <h3>Phát triển con người</h3>
                <p>
                  Chúng tôi tin rằng "Đầu tư vào tri thức là khoản đầu tư siêu lợi nhuận". 
                  Tại Sano, văn hóa học tập trọn đời (Lifelong Learning) được đề cao hàng đầu. 
                  Mỗi cá nhân lớn lên thì tổ chức mới lớn mạnh.
                </p>
              </div>
            </div>

            {/* VALUE 2: SÁNG TẠO */}
            <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image 
                quality={70}
                  src="https://i.ibb.co/4RqZNGj2/01-XL8986-1.jpg" // Ảnh sáng tạo/bóng đèn
                  alt="Innovation" fill 
                />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>02</span>
                <div className={styles.iconWrapper}><Lightbulb /></div>
                <h3>Sáng tạo đổi mới</h3>
                <p>
                  "Thách thức lối mòn - Phá vỡ giới hạn". Trong thế giới nội dung số thay đổi từng giây, 
                  đứng yên nghĩa là tụt lùi. Chúng tôi khuyến khích những ý tưởng điên rồ nhất 
                  và chấp nhận sai lầm để tìm ra cái mới.
                </p>
              </div>
            </div>

            {/* VALUE 3: KỶ LUẬT */}
            <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image 
                quality={70}
                  src="https://i.ibb.co/mCX71V59/539073780-773073298813791-3355023922934736797-n.jpg" // Ảnh Team đồng lòng/Thể thao
                  alt="Discipline" fill 
                />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>03</span>
                <div className={styles.iconWrapper}><ShieldCheck /></div>
                <h3>Kỷ luật thép</h3>
                <p>
                  Sức mạnh của tập thể đến từ sự tuân thủ. Chúng tôi làm việc với tinh thần trách nhiệm cao nhất, 
                  cam kết đúng deadline và quy trình. Tự do trong sáng tạo, nhưng kỷ luật trong hành động.
                </p>
              </div>
            </div>

            {/* VALUE 4: NGHĨ LỚN */}
            <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image 
                quality={70}
                  src="https://i.ibb.co/p6Kmvzx6/595146045-860013056786481-2102202801764208385-n.jpg" // Ảnh vũ trụ/trái đất
                  alt="Think Big" fill 
                />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>04</span>
                <div className={styles.iconWrapper}><Rocket /></div>
                <h3>Nghĩ lớn (Think Big)</h3>
                <p>
                  Dám mơ những giấc mơ lớn. Đặt ra những mục tiêu thách thức (Moonshot Goals) 
                  để kích thích tiềm năng vô hạn bên trong mỗi người. 
                  Không chấp nhận sự tầm thường (Mediocrity).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* 1. HERO BANNER */}
      {/* <section className={styles.heroSection}>
        <div className={styles.bgImage}>
           <Image src={IMAGES.SANO_LIFE.OFFICE} alt="Sano Culture" fill priority />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.label}>Văn hóa doanh nghiệp</span>
          <h1>Giá trị cốt lõi</h1>
          <p>
            Những nguyên tắc vàng định hình tư duy và hành động <br/>
            của người Sano Media để kiến tạo thành công bền vững.
          </p>
        </div>
      </section> */}

      {/* 2. VALUES LIST (8 GIÁ TRỊ TỪ FILE EXCEL) */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          
          <div className={styles.introText}>
            <h2>Giá trị văn hóa cốt lõi Sano</h2>
            <p>
              Chúng tôi không xây dựng văn hóa trên giấy tờ. Đây là những hành động thực tế 
              được thực hiện hàng ngày, hàng giờ bởi mỗi thành viên.
            </p>
          </div>

          <div className={styles.valuesList}>
            
            {/* 1. HỌC TẬP SUỐT ĐỜI */}
            <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80" alt="Learning" fill />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>01</span>
                <div className={styles.iconWrapper}><BookOpen /></div>
                <h3>Học tập suốt đời</h3>
                <p className={styles.definition}>MMO thay đổi liên tục. Không học = Tự loại mình.</p>
                <p className={styles.action}>
                  Hành động: Mỗi ngày học thêm 1 kỹ năng mới, tư duy mới, cách làm mới. 
                  Liên tục cập nhật kiến thức để không bị bỏ lại phía sau.
                </p>
              </div>
            </div>

            {/* 2. THÁI ĐỘ TÍCH CỰC */}
            <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="Positive" fill />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>02</span>
                <div className={styles.iconWrapper}><Lightbulb /></div>
                <h3>Thái độ tích cực</h3>
                <p className={styles.definition}>Có vấn đề → Đưa giải pháp. Không than vãn, không đổ lỗi.</p>
                <p className={styles.action}>
                  Hành động: Thay vì phàn nàn, hãy tư duy đề xuất giải pháp để giải quyết vấn đề. 
                  Giữ năng lượng tích cực để lan toả đến đồng đội.
                </p>
              </div>
            </div>

            {/* 3. SỰ CÔNG NHẬN */}
            <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80" alt="Recognition" fill />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>03</span>
                <div className={styles.iconWrapper}><Trophy /></div>
                <h3>Sự công nhận</h3>
                <p className={styles.definition}>Làm tốt phải được ghi nhận công bằng - minh bạch.</p>
                <p className={styles.action}>
                  Hành động: Ghi nhận kịp thời cá nhân/team có kết quả tốt hoặc ý tưởng sáng tạo. 
                  Tạo động lực để nhân sự cống hiến hết mình.
                </p>
              </div>
            </div>

            {/* 4. ĐOÀN KẾT */}
            <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80" alt="Unity" fill />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>04</span>
                <div className={styles.iconWrapper}><Users /></div>
                <h3>Đoàn kết</h3>
                <p className={styles.definition}>Hướng về mục tiêu chung để cùng WIN.</p>
                <p className={styles.action}>
                  Hành động: Luôn giữ tinh thần sẵn sàng giúp đỡ và hỗ trợ tất cả mọi người. 
                  Thành công của đồng đội cũng là thành công của chính mình.
                </p>
              </div>
            </div>

            {/* 5. KỶ LUẬT */}
            <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80" alt="Discipline" fill />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>05</span>
                <div className={styles.iconWrapper}><ShieldCheck /></div>
                <h3>Kỷ luật</h3>
                <p className={styles.definition}>Kỷ luật là thước đo giá trị của 1 người.</p>
                <p className={styles.action}>
                  Hành động: Tuân thủ tuyệt đối quy trình, quy định của công ty. 
                  Làm việc đúng giờ, đúng deadline và đúng chất lượng cam kết.
                </p>
              </div>
            </div>

             {/* 6. PHẢN HỒI - PHẢN BIỆN */}
             <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" alt="Feedback" fill />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>06</span>
                <div className={styles.iconWrapper}><MessageSquare /></div>
                <h3>Phản hồi - Phản biện</h3>
                <p className={styles.definition}>Không im lặng - Không né tránh trách nhiệm.</p>
                <p className={styles.action}>
                  Hành động: Có việc → Phản hồi ngay. Chưa xong → Báo tiến độ. Có vấn đề → Báo sớm. 
                  Thẳng thắn đóng góp ý kiến để xây dựng tập thể tốt hơn.
                </p>
              </div>
            </div>

            {/* 7. KAIZEN - CẢI TIẾN */}
            <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" alt="Kaizen" fill />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>07</span>
                <div className={styles.iconWrapper}><TrendingUp /></div>
                <h3>Kaizen - Cải tiến liên tục</h3>
                <p className={styles.definition}>Cải tiến liên tục để nâng cao chất lượng.</p>
                <p className={styles.action}>
                  Hành động: Kaizen hàng ngày, hàng tuần. Không chấp nhận sự dậm chân tại chỗ. 
                  Tối ưu hoá quy trình làm việc để đạt hiệu suất cao hơn.
                </p>
              </div>
            </div>

            {/* 8. KẾT QUẢ = GIÁ TRỊ */}
            <div className={styles.valueCard}>
              <div className={styles.bgImage}>
                <Image src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80" alt="Result" fill />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <span className={styles.indexNumber}>08</span>
                <div className={styles.iconWrapper}><Gem /></div>
                <h3>Kết quả = Giá trị</h3>
                <p className={styles.definition}>Kết quả lớn - Giá trị càng lớn - Phát triển càng cao.</p>
                <p className={styles.action}>
                  Hành động: Tập trung vào hiệu quả cuối cùng. Liên tục tạo ra những kết quả mới, 
                  những kỷ lục mới để khẳng định năng lực bản thân.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. NGUYÊN TẮC (THE PRINCIPLES) - PHẦN MỚI TỪ FILE EXCEL */}
      <section className={styles.principlesSection}>
        <div className={styles.container}>
          <div className={styles.principlesHeader}>
            <h2>Nguyên tắc & Kỷ luật</h2>
            <p>Những giới hạn đỏ không được phép vi phạm tại Sano Media</p>
          </div>

          <div className={styles.principlesGrid}>
            <div className={styles.principleItem}>
              <div className={styles.pIcon}><AlertTriangle size={20}/></div>
              <p>
                <strong>Không phản hồi, phản biện</strong>
                <span>→ Trừ điểm thi đua / Đánh giá KPI</span>
              </p>
            </div>
            
            <div className={styles.principleItem}>
              <div className={styles.pIcon}><AlertTriangle size={20}/></div>
              <p>
                <strong>Than phiền mà không có giải pháp</strong>
                <span>→ Nhắc nhở 1 lần, Tái phạm 3 lần loại</span>
              </p>
            </div>

            <div className={styles.principleItem}>
              <div className={styles.pIcon}><AlertTriangle size={20}/></div>
              <p>
                <strong>Không đạt mục tiêu liên tiếp</strong>
                <span>→ Xem lại vai trò & vị trí công việc</span>
              </p>
            </div>

            <div className={styles.principleItem}>
              <div className={styles.pIcon}><XCircle size={20}/></div>
              <p>
                <strong>Không học – Không tiến bộ</strong>
                <span>→ Không tăng thu nhập (Đào thải tự nhiên)</span>
              </p>
            </div>

            <div className={styles.principleItem}>
              <div className={styles.pIcon}><XCircle size={20}/></div>
              <p>
                <strong>Phá đoàn kết nội bộ</strong>
                <span>→ Loại khỏi hệ thống ngay lập tức</span>
              </p>
            </div>

            <div className={styles.principleItem}>
              <div className={styles.pIcon}><XCircle size={20}/></div>
              <p>
                <strong>Không phù hợp văn hóa</strong>
                <span>→ Không giữ, dù giỏi đến đâu</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}