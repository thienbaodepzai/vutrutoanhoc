import { Lesson } from '../types/mathverse';

export const CURRICULUM_DATA: Lesson[] = [
  // ========================== LỚP 6 ==========================
  {
    id: 'l6-so-tu-nhien',
    grade: 6,
    topic: 'Số học',
    title: 'Tập hợp các số tự nhiên & Phép tính lũy thừa',
    objective: 'Nắm vững thứ tự thực hiện phép tính, quy tắc nhân chia hai lũy thừa cùng cơ số.',
    theory: [
      'Tập hợp số tự nhiên ký hiệu là ℕ = {0, 1, 2, 3, ...}.',
      'Thứ tự thực hiện phép tính: Trong ngoặc trước ( ), [ ], { } -> Lũy thừa -> Nhân và chia -> Cộng và trừ.',
      'Lũy thừa bậc n của a là tích của n thừa số bằng a: aⁿ = a · a · ... · a (n thừa số).',
      'Nhân hai lũy thừa cùng cơ số: aᵐ · aⁿ = aᵐ⁺ⁿ.',
      'Chia hai lũy thừa cùng cơ số (a ≠ 0, m ≥ n): aᵐ : aⁿ = aᵐ⁻ⁿ.'
    ],
    formulas: [
      {
        title: 'Nhân hai lũy thừa cùng cơ số',
        formula: 'aᵐ · aⁿ = aᵐ⁺ⁿ',
        explanation: 'Giữ nguyên cơ số a và cộng các số mũ lại với nhau.'
      },
      {
        title: 'Chia hai lũy thừa cùng cơ số',
        formula: 'aᵐ : aⁿ = aᵐ⁻ⁿ  (a ≠ 0, m ≥ n)',
        explanation: 'Giữ nguyên cơ số a và trừ số mũ của số bị chia cho số chia.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Nhận diện phép toán ưu tiên',
        description: 'Khi gặp biểu thức: 5 · 2³ - 18 : 3², ta tính lũy thừa trước.',
        mathSnippet: '2³ = 8 và 3² = 9'
      },
      {
        title: 'Bước 2: Thực hiện nhân và chia',
        description: 'Thay kết quả lũy thừa vào biểu thức và tính nhân, chia từ trái sang phải.',
        mathSnippet: '5 · 8 = 40  và  18 : 9 = 2'
      },
      {
        title: 'Bước 3: Thực hiện phép cộng trừ cuối cùng',
        description: 'Lấy 40 - 2 = 38. Vậy giá trị biểu thức là 38.',
        mathSnippet: 'Kết quả: 38'
      }
    ],
    visualType: 'numberline',
    practiceQuestionIds: ['q6-1', 'q6-2', 'q6-fe1'],
    xpReward: 50
  },
  {
    id: 'l6-so-nguyen',
    grade: 6,
    topic: 'Số học',
    title: 'Số nguyên & Phép cộng trừ số nguyên',
    objective: 'Hiểu trục số nguyên, số đối và quy tắc cộng, trừ số nguyên cùng dấu và khác dấu.',
    theory: [
      'Tập hợp số nguyên ℤ gồm số nguyên âm, số 0 và số nguyên dương: ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}.',
      'Hai số đối nhau có tổng bằng 0. Ví dụ: 5 và -5 đối nhau.',
      'Cộng hai số nguyên cùng dấu âm: Cộng phần số tự nhiên rồi đặt dấu "-" phía trước: (-a) + (-b) = -(a + b).',
      'Cộng hai số nguyên khác dấu: Lấy số lớn hơn trừ số bé hơn rồi mang dấu của số có giá trị tuyệt đối lớn hơn.',
      'Phép trừ số nguyên: Muốn trừ a cho b, ta cộng a với số đối của b: a - b = a + (-b).'
    ],
    formulas: [
      {
        title: 'Phép trừ là cộng với số đối',
        formula: 'a - b = a + (-b)',
        explanation: 'Ví dụ: 3 - 7 = 3 + (-7) = -4; 5 - (-2) = 5 + 2 = 7.'
      },
      {
        title: 'Nhân hai số nguyên cùng dấu',
        formula: '(-) · (-) = (+)  và  (+) · (+) = (+)',
        explanation: 'Tích của hai số nguyên cùng dấu luôn là một số nguyên dương.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Phân tích phép tính',
        description: 'Tính: (-15) + 9. Đây là phép cộng hai số nguyên khác dấu.',
        mathSnippet: '|-15| = 15 > |9| = 9'
      },
      {
        title: 'Bước 2: Lấy hiệu hai số tự nhiên',
        description: 'Lấy 15 - 9 = 6.',
        mathSnippet: '15 - 9 = 6'
      },
      {
        title: 'Bước 3: Đặt dấu của số lớn hơn',
        description: 'Vì 15 mang dấu trừ (-) nên kết quả mang dấu (-). Kết quả là -6.',
        mathSnippet: '(-15) + 9 = -6'
      }
    ],
    visualType: 'numberline',
    practiceQuestionIds: ['q6-3', 'q6-4', 'q6-mf1'],
    xpReward: 50
  },
  {
    id: 'l6-phan-so',
    grade: 6,
    topic: 'Phân số',
    title: 'Phân số & Quy đồng mẫu số',
    objective: 'Nắm chắc tính chất cơ bản của phân số, cách quy đồng mẫu nhiều phân số và thực hiện phép cộng trừ.',
    theory: [
      'Phân số có dạng a/b với a, b ∈ ℤ và b ≠ 0. a là tử số, b là mẫu số.',
      'Hai phân số a/b = c/d khi và chỉ khi a · d = b · c (tích chéo bằng nhau).',
      'Rút gọn phân số: Chia cả tử và mẫu cho ước chung lớn nhất (ƯCLN) để được phân số tối giản.',
      'Quy đồng mẫu: Tìm BCNN của các mẫu số làm mẫu chung, nhân cả tử và mẫu với thừa số phụ tương ứng.'
    ],
    formulas: [
      {
        title: 'Cộng hai phân số cùng mẫu',
        formula: 'a/m + b/m = (a + b) / m',
        explanation: 'Giữ nguyên mẫu số, cộng các tử số lại với nhau.'
      },
      {
        title: 'Nhân hai phân số',
        formula: '(a/b) · (c/d) = (a · c) / (b · d)',
        explanation: 'Nhân tử với tử, mẫu với mẫu.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Tìm mẫu chung',
        description: 'Tính: 1/4 + 2/3. Mẫu số là 4 và 3. Mẫu chung nhỏ nhất BCNN(4, 3) = 12.',
        mathSnippet: 'Mẫu chung = 12'
      },
      {
        title: 'Bước 2: Quy đồng mẫu',
        description: 'Thừa số phụ: 12 : 4 = 3 và 12 : 3 = 4. Ta có: 1/4 = 3/12 và 2/3 = 8/12.',
        mathSnippet: '3/12 + 8/12'
      },
      {
        title: 'Bước 3: Cộng tử số',
        description: 'Cộng hai tử số: (3 + 8) / 12 = 11/12.',
        mathSnippet: '11/12'
      }
    ],
    visualType: 'fractions',
    practiceQuestionIds: ['q6-5', 'q6-6'],
    xpReward: 50
  },
  {
    id: 'l6-hinh-hoc-truc-quan',
    grade: 6,
    topic: 'Hình học',
    title: 'Tam giác đều, Hình thoi & Hình bình hành',
    objective: 'Nhận biết các hình hình học trực quan và áp dụng công thức chu vi, diện tích.',
    theory: [
      'Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng nhau (đều bằng 60°).',
      'Hình thoi có 4 cạnh bằng nhau. Hai đường chéo vuông góc với nhau tại trung điểm mỗi đường.',
      'Hình bình hành có các cạnh đối song song và bằng nhau, các góc đối bằng nhau.',
      'Chu vi hình thoi cạnh a: C = 4a. Diện tích hình thoi có hai đường chéo m, n: S = (m · n) / 2.',
      'Diện tích hình bình hành đáy a, chiều cao h: S = a · h.'
    ],
    formulas: [
      {
        title: 'Diện tích hình thoi',
        formula: 'S = (d₁ · d₂) / 2',
        explanation: 'Bằng một nửa tích độ dài hai đường chéo.'
      },
      {
        title: 'Diện tích hình bình hành',
        formula: 'S = a · h',
        explanation: 'Bằng tích của độ dài cạnh đáy nhân với chiều cao tương ứng.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Xác định kích thước',
        description: 'Cho hình thoi ABCD có độ dài hai đường chéo là 6 cm và 8 cm.',
        mathSnippet: 'd₁ = 6 cm, d₂ = 8 cm'
      },
      {
        title: 'Bước 2: Áp dụng công thức',
        description: 'Diện tích hình thoi bằng một nửa tích hai đường chéo: S = (6 · 8) / 2.',
        mathSnippet: 'S = 48 / 2 = 24 cm²'
      },
      {
        title: 'Bước 3: Kết luận đơn vị',
        description: 'Vậy diện tích hình thoi là 24 cm².',
        mathSnippet: 'Đáp số: 24 cm²'
      }
    ],
    visualType: 'geometry',
    practiceQuestionIds: ['q6-7', 'q6-8'],
    xpReward: 50
  },

  // ========================== LỚP 7 ==========================
  {
    id: 'l7-so-huu-ti',
    grade: 7,
    topic: 'Số học',
    title: 'Tập hợp số hữu tỉ ℚ & Quy tắc chuyển vế',
    objective: 'Nắm được định nghĩa số hữu tỉ, biểu diễn trên trục số và giải bài toán tìm x bằng chuyển vế đổi dấu.',
    theory: [
      'Số hữu tỉ là số viết được dưới dạng phân số a/b (a, b ∈ ℤ, b ≠ 0). Ký hiệu tập hợp là ℚ.',
      'Mọi số nguyên, số thập phân hữu hạn và thập phân vô hạn tuần hoàn đều là số hữu tỉ.',
      'Quy tắc chuyển vế: Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó.',
      'Nếu x + a = b thì x = b - a. Nếu x - a = b thì x = b + a.'
    ],
    formulas: [
      {
        title: 'Quy tắc chuyển vế',
        formula: 'A + B = C ⇔ A = C - B',
        explanation: 'Chuyển vế đổi dấu: dấu (+) đổi thành (-), dấu (-) đổi thành (+).'
      },
      {
        title: 'Lũy thừa số hữu tỉ',
        formula: '(x · y)ⁿ = xⁿ · yⁿ',
        explanation: 'Lũy thừa của một tích bằng tích các lũy thừa.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Nhận diện phương trình',
        description: 'Tìm x biết: x - 3/4 = 1/2.',
        mathSnippet: 'x - 3/4 = 1/2'
      },
      {
        title: 'Bước 2: Chuyển vế đổi dấu',
        description: 'Chuyển -3/4 từ vế trái sang vế phải thành +3/4.',
        mathSnippet: 'x = 1/2 + 3/4'
      },
      {
        title: 'Bước 3: Quy đồng và tính',
        description: 'Quy đồng 1/2 = 2/4. Ta có x = 2/4 + 3/4 = 5/4.',
        mathSnippet: 'x = 5/4'
      }
    ],
    visualType: 'equation',
    practiceQuestionIds: ['q7-1', 'q7-2'],
    xpReward: 50
  },
  {
    id: 'l7-ti-le-thuc',
    grade: 7,
    topic: 'Đại số',
    title: 'Tỉ lệ thức & Dãy tỉ số bằng nhau',
    objective: 'Hiểu tính chất cơ bản của tỉ lệ thức và áp dụng tính chất dãy tỉ số bằng nhau để giải bài toán chia tỉ lệ.',
    theory: [
      'Tỉ lệ thức là đẳng thức của hai tỉ số: a/b = c/d (với b, d ≠ 0).',
      'Tính chất cơ bản: a/b = c/d ⇔ a · d = b · c (tích ngoại tỉ bằng tích trung tỉ).',
      'Tính chất dãy tỉ số bằng nhau: a/b = c/d = (a + c)/(b + d) = (a - c)/(b - d) (với mẫu khác 0).'
    ],
    formulas: [
      {
        title: 'Dãy tỉ số bằng nhau',
        formula: 'a/b = c/d = (a + c)/(b + d) = (a - c)/(b - d)',
        explanation: 'Áp dụng rất nhiều trong các bài toán thực tế chia phần, chia kẹo, tỉ lệ học sinh.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Thiết lập dãy tỉ số',
        description: 'Tìm x và y biết x/2 = y/3 và x + y = 20.',
        mathSnippet: 'x/2 = y/3 và x + y = 20'
      },
      {
        title: 'Bước 2: Áp dụng tính chất',
        description: 'Theo tính chất dãy tỉ số bằng nhau: x/2 = y/3 = (x + y)/(2 + 3) = 20/5 = 4.',
        mathSnippet: '(x + y)/(2 + 3) = 20/5 = 4'
      },
      {
        title: 'Bước 3: Tìm từng ẩn',
        description: 'x = 2 · 4 = 8; y = 3 · 4 = 12.',
        mathSnippet: 'x = 8, y = 12'
      }
    ],
    visualType: 'equation',
    practiceQuestionIds: ['q7-3', 'q7-4'],
    xpReward: 50
  },
  {
    id: 'l7-tam-giac-pythagore',
    grade: 7,
    topic: 'Hình học',
    title: 'Tam giác bằng nhau & Định lý Pythagore',
    objective: 'Nắm vững 3 trường hợp bằng nhau của tam giác (c-c-c, c-g-c, g-c-g) và định lý Pythagore trong tam giác vuông.',
    theory: [
      'Ba trường hợp bằng nhau: Cạnh-Cạnh-Cạnh (c-c-c), Cạnh-Góc-Cạnh (c-g-c), Góc-Cạnh-Góc (g-c-g).',
      'Tam giác cân có hai cạnh bên bằng nhau và hai góc ở đáy bằng nhau.',
      'Định lý Pythagore: Trong một tam giác vuông, bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông.',
      'Công thức: BC² = AB² + AC² (khi tam giác ABC vuông tại A).'
    ],
    formulas: [
      {
        title: 'Định lý Pythagore',
        formula: 'c² = a² + b²',
        explanation: 'Trong đó c là cạnh huyền, a và b là hai cạnh góc vuông.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Xác định cạnh huyền và cạnh góc vuông',
        description: 'Cho tam giác vuông có 2 cạnh góc vuông a = 3 cm, b = 4 cm. Tìm cạnh huyền c.',
        mathSnippet: 'a = 3, b = 4, c = ?'
      },
      {
        title: 'Bước 2: Thay vào công thức Pythagore',
        description: 'c² = 3² + 4² = 9 + 16 = 25.',
        mathSnippet: 'c² = 25'
      },
      {
        title: 'Bước 3: Lấy căn bậc hai',
        description: 'c = √25 = 5 cm. Vậy cạnh huyền dài 5 cm.',
        mathSnippet: 'c = 5 cm'
      }
    ],
    visualType: 'geometry',
    practiceQuestionIds: ['q7-5', 'q7-6'],
    xpReward: 50
  },

  // ========================== LỚP 8 ==========================
  {
    id: 'l8-hang-dang-thuc',
    grade: 8,
    topic: 'Đại số',
    title: '7 Hằng đẳng thức đáng nhớ',
    objective: 'Ghi nhớ và áp dụng linh hoạt 7 hằng đẳng thức để rút gọn biểu thức và phân tích đa thức thành nhân tử.',
    theory: [
      '1. Bình phương của một tổng: (A + B)² = A² + 2AB + B²',
      '2. Bình phương của một hiệu: (A - B)² = A² - 2AB + B²',
      '3. Hiệu hai bình phương: A² - B² = (A - B)(A + B)',
      '4. Lập phương của một tổng: (A + B)³ = A³ + 3A²B + 3AB² + B³',
      '5. Lập phương của một hiệu: (A - B)³ = A³ - 3A²B + 3AB² - B³',
      '6. Tổng hai lập phương: A³ + B³ = (A + B)(A² - AB + B²)',
      '7. Hiệu hai lập phương: A³ - B³ = (A - B)(A² + AB + B²)'
    ],
    formulas: [
      {
        title: 'Hiệu hai bình phương',
        formula: 'A² - B² = (A - B)(A + B)',
        explanation: 'Giúp tính nhẩm siêu nhanh, ví dụ: 51² - 49² = (51 - 49)(51 + 49) = 2 · 100 = 200.'
      },
      {
        title: 'Bình phương của một tổng/hiệu',
        formula: '(A ± B)² = A² ± 2AB + B²',
        explanation: 'Lưu ý số hạng ở giữa là 2AB (gấp đôi tích).'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Nhận dạng hằng đẳng thức',
        description: 'Khai triển biểu thức: (x + 3)².',
        mathSnippet: 'Dạng (A + B)² với A = x, B = 3'
      },
      {
        title: 'Bước 2: Áp dụng công thức',
        description: 'A² + 2AB + B² = x² + 2 · x · 3 + 3².',
        mathSnippet: 'x² + 6x + 9'
      },
      {
        title: 'Bước 3: Thu gọn kết quả',
        description: 'Kết quả cuối cùng là x² + 6x + 9.',
        mathSnippet: '(x + 3)² = x² + 6x + 9'
      }
    ],
    visualType: 'equation',
    practiceQuestionIds: ['q8-1', 'q8-2'],
    xpReward: 50
  },
  {
    id: 'l8-phuong-trinh-bac-nhat',
    grade: 8,
    topic: 'Đại số',
    title: 'Phương trình bậc nhất một ẩn & Cách giải',
    objective: 'Giải phương trình ax + b = 0 (a ≠ 0) và giải bài toán bằng cách lập phương trình.',
    theory: [
      'Phương trình bậc nhất một ẩn có dạng ax + b = 0 (với a ≠ 0).',
      'Cách giải: ax = -b => x = -b / a.',
      'Các bước giải bài toán bằng cách lập phương trình:\n  + Bước 1: Chọn ẩn số và đặt điều kiện thích hợp.\n  + Bước 2: Biểu diễn các đại lượng chưa biết qua ẩn và đại lượng đã biết, lập phương trình.\n  + Bước 3: Giải phương trình và đối chiếu điều kiện để kết luận.'
    ],
    formulas: [
      {
        title: 'Nghiệm phương trình ax + b = 0',
        formula: 'x = -b / a  (a ≠ 0)',
        explanation: 'Phương trình bậc nhất một ẩn luôn có duy nhất một nghiệm.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Chuyển số hạng tự do sang vế phải',
        description: 'Giải phương trình: 3x - 12 = 0. Chuyển -12 sang vế phải thành +12.',
        mathSnippet: '3x = 12'
      },
      {
        title: 'Bước 2: Chia hai vế cho hệ số của x',
        description: 'Chia cả hai vế cho 3: x = 12 : 3.',
        mathSnippet: 'x = 4'
      },
      {
        title: 'Bước 3: Kết luận tập nghiệm',
        description: 'Vậy tập nghiệm của phương trình là S = {4}.',
        mathSnippet: 'S = {4}'
      }
    ],
    visualType: 'equation',
    practiceQuestionIds: ['q8-3', 'q8-4'],
    xpReward: 50
  },
  {
    id: 'l8-dinh-ly-thales',
    grade: 8,
    topic: 'Hình học',
    title: 'Định lý Thalès & Tam giác đồng dạng',
    objective: 'Nắm vững định lý Thalès thuận, đảo và các trường hợp đồng dạng của tam giác.',
    theory: [
      'Định lý Thalès: Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.',
      'Hệ quả định lý Thalès: Nếu đường thẳng cắt hai cạnh và song song với cạnh thứ ba thì tạo thành tam giác mới có ba cạnh tương ứng tỉ lệ với ba cạnh tam giác đã cho.',
      'Hai tam giác đồng dạng nếu các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ.'
    ],
    formulas: [
      {
        title: 'Hệ quả Thalès',
        formula: 'MN // BC ⇒ AM/AB = AN/AC = MN/BC',
        explanation: 'Tỉ số các cạnh tam giác nhỏ AMN tỉ lệ thuận với tam giác lớn ABC.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Đọc đề và vẽ hình',
        description: 'Cho tam giác ABC, MN // BC (M ∈ AB, N ∈ AC). Biết AM = 2, MB = 4, BC = 9. Tìm MN.',
        mathSnippet: 'AB = AM + MB = 2 + 4 = 6'
      },
      {
        title: 'Bước 2: Áp dụng hệ quả Thalès',
        description: 'Vì MN // BC nên: AM / AB = MN / BC.',
        mathSnippet: '2 / 6 = MN / 9'
      },
      {
        title: 'Bước 3: Tính toán nhân chéo',
        description: 'MN = (2 · 9) / 6 = 18 / 6 = 3.',
        mathSnippet: 'MN = 3'
      }
    ],
    visualType: 'geometry',
    practiceQuestionIds: ['q8-5', 'q8-6'],
    xpReward: 50
  },

  // ========================== LỚP 9 ==========================
  {
    id: 'l9-can-bac-hai',
    grade: 9,
    topic: 'Đại số',
    title: 'Căn bậc hai số học & Hằng đẳng thức √(A²) = |A|',
    objective: 'Hiểu điều kiện xác định của căn thức bậc hai và áp dụng thành thạo hằng đẳng thức rút gọn.',
    theory: [
      'Với số thực a ≥ 0, căn bậc hai số học của a là số x ≥ 0 sao cho x² = a. Ký hiệu là √a.',
      'Biểu thức √A xác định (có nghĩa) khi và chỉ khi A ≥ 0.',
      'Hằng đẳng thức cốt lõi: √(A²) = |A|. Nếu A ≥ 0 thì |A| = A; nếu A < 0 thì |A| = -A.',
      'Khai phương một tích: √(A · B) = √A · √B (với A ≥ 0, B ≥ 0).'
    ],
    formulas: [
      {
        title: 'Hằng đẳng thức căn bậc hai',
        formula: '√(A²) = |A|',
        explanation: 'Rất hay gặp trong các đề thi tuyển sinh vào lớp 10!'
      },
      {
        title: 'Trục căn thức ở mẫu',
        formula: '1 / (√a - √b) = (√a + √b) / (a - b)',
        explanation: 'Nhân cả tử và mẫu với biểu thức liên hợp.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Nhận diện bình phương trong căn',
        description: 'Rút gọn biểu thức: √((√3 - 2)²).',
        mathSnippet: 'Dạng √(A²) với A = √3 - 2'
      },
      {
        title: 'Bước 2: Áp dụng hằng đẳng thức',
        description: '√((√3 - 2)²) = |√3 - 2|.',
        mathSnippet: '|√3 - 2|'
      },
      {
        title: 'Bước 3: Phá dấu giá trị tuyệt đối',
        description: 'Vì 3 < 4 nên √3 < √4 = 2, suy ra √3 - 2 < 0. Do đó |√3 - 2| = -(√3 - 2) = 2 - √3.',
        mathSnippet: '2 - √3'
      }
    ],
    visualType: 'equation',
    practiceQuestionIds: ['q9-1', 'q9-2'],
    xpReward: 50
  },
  {
    id: 'l9-he-phuong-trinh',
    grade: 9,
    topic: 'Đại số',
    title: 'Hệ hai phương trình bậc nhất hai ẩn',
    objective: 'Thành thạo hai phương pháp kinh điển: Phương pháp thế và Phương pháp cộng đại số.',
    theory: [
      'Hệ phương trình bậc nhất hai ẩn có dạng tổng quát: { ax + by = c ; a\'x + b\'y = c\' }.',
      'Phương pháp thế: Từ một phương trình biểu diễn ẩn này theo ẩn kia rồi thế vào phương trình còn lại.',
      'Phương pháp cộng đại số: Nhân hai vế mỗi phương trình với hệ số thích hợp để hệ số của một ẩn bằng nhau (hoặc đối nhau), rồi trừ (hoặc cộng) hai vế để khử ẩn đó.'
    ],
    formulas: [
      {
        title: 'Dạng tổng quát hệ phương trình',
        formula: '{ ax + by = c ; a\'x + b\'y = c\' }',
        explanation: 'Hệ có nghiệm duy nhất khi a/a\' ≠ b/b\'.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Quan sát hệ phương trình',
        description: 'Giải hệ: { 2x + y = 7 ; x - y = 2 }.',
        mathSnippet: 'Hệ số của y là +1 và -1 (đối nhau)'
      },
      {
        title: 'Bước 2: Cộng hai phương trình theo vế',
        description: '(2x + y) + (x - y) = 7 + 2  => 3x = 9 => x = 3.',
        mathSnippet: '3x = 9  =>  x = 3'
      },
      {
        title: 'Bước 3: Thay x để tìm y',
        description: 'Thay x = 3 vào phương trình x - y = 2 => 3 - y = 2 => y = 1.',
        mathSnippet: 'Nghiệm duy nhất: (x; y) = (3; 1)'
      }
    ],
    visualType: 'equation',
    practiceQuestionIds: ['q9-3', 'q9-4'],
    xpReward: 50
  },
  {
    id: 'l9-phuong-trinh-bac-hai-viet',
    grade: 9,
    topic: 'Đại số',
    title: 'Phương trình bậc hai một ẩn & Hệ thức Vi-ét',
    objective: 'Nắm chắc công thức nghiệm qua biệt thức Delta (Δ) và định lý Vi-ét để tính nhẩm nghiệm.',
    theory: [
      'Phương trình bậc hai một ẩn: ax² + bx + c = 0 (a ≠ 0).',
      'Biệt thức: Δ = b² - 4ac.\n  + Nếu Δ > 0: Phương trình có 2 nghiệm phân biệt: x₁,₂ = (-b ± √Δ) / 2a.\n  + Nếu Δ = 0: Phương trình có nghiệm kép: x₁ = x₂ = -b / 2a.\n  + Nếu Δ < 0: Phương trình vô nghiệm.',
      'Hệ thức Vi-ét: Nếu x₁, x₂ là hai nghiệm của phương trình thì:\n  S = x₁ + x₂ = -b / a\n  P = x₁ · x₂ = c / a.'
    ],
    formulas: [
      {
        title: 'Biệt thức Delta',
        formula: 'Δ = b² - 4ac',
        explanation: 'Quyết định số nghiệm của phương trình bậc hai.'
      },
      {
        title: 'Hệ thức Vi-ét',
        formula: 'x₁ + x₂ = -b/a  và  x₁ · x₂ = c/a',
        explanation: 'Dùng để nhẩm nghiệm hoặc tìm hai số khi biết tổng và tích.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Xác định hệ số a, b, c',
        description: 'Xét phương trình: x² - 5x + 6 = 0. Ta có a = 1, b = -5, c = 6.',
        mathSnippet: 'a = 1, b = -5, c = 6'
      },
      {
        title: 'Bước 2: Tính biệt thức Δ',
        description: 'Δ = b² - 4ac = (-5)² - 4 · 1 · 6 = 25 - 24 = 1 > 0.',
        mathSnippet: 'Δ = 1 > 0, √Δ = 1'
      },
      {
        title: 'Bước 3: Tính hai nghiệm',
        description: 'x₁ = (5 + 1) / 2 = 3; x₂ = (5 - 1) / 2 = 2. Thử lại theo Vi-ét: S = 3 + 2 = 5, P = 3 · 2 = 6 (chính xác).',
        mathSnippet: 'x₁ = 3, x₂ = 2'
      }
    ],
    visualType: 'equation',
    practiceQuestionIds: ['q9-5', 'q9-6'],
    xpReward: 50
  },
  {
    id: 'l9-goc-voi-duong-tron',
    grade: 9,
    topic: 'Hình học',
    title: 'Đường tròn & Góc nội tiếp',
    objective: 'Phân biệt góc ở tâm, góc nội tiếp và tính chất quan trọng của góc nội tiếp chắn nửa đường tròn.',
    theory: [
      'Góc ở tâm là góc có đỉnh trùng với tâm đường tròn. Số đo của góc ở tâm bằng số đo của cung bị chắn.',
      'Góc nội tiếp là góc có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn đó.',
      'Định lý: Trong một đường tròn, số đo của góc nội tiếp bằng nửa số đo của cung bị chắn.',
      'Hệ quả cực kỳ quan trọng: Góc nội tiếp chắn nửa đường tròn là GÓC VUÔNG (bằng 90°).'
    ],
    formulas: [
      {
        title: 'Góc nội tiếp chắn cung AmB',
        formula: 'Góc nội tiếp = 1/2 Số đo cung bị chắn',
        explanation: 'Hai góc nội tiếp cùng chắn một cung thì bằng nhau.'
      },
      {
        title: 'Góc chắn nửa đường tròn',
        formula: '∠ACB = 90°  (AB là đường kính)',
        explanation: 'Tam giác nội tiếp đường tròn có 1 cạnh là đường kính thì luôn là tam giác vuông.'
      }
    ],
    steps: [
      {
        title: 'Bước 1: Phân tích đường kính và cung',
        description: 'Cho đường tròn (O) đường kính AB. Lấy điểm C bất kỳ trên đường tròn (C khác A, B). Hỏi góc ∠ACB bằng bao nhiêu độ?',
        mathSnippet: 'AB là đường kính'
      },
      {
        title: 'Bước 2: Nhận biết tính chất',
        description: 'Góc ∠ACB là góc nội tiếp chắn nửa đường tròn đường kính AB.',
        mathSnippet: 'Cung bị chắn là nửa đường tròn (180°)'
      },
      {
        title: 'Bước 3: Kết luận số đo góc',
        description: 'Số đo góc ∠ACB = 180° / 2 = 90°. Vậy tam giác ABC vuông tại C.',
        mathSnippet: '∠ACB = 90°'
      }
    ],
    visualType: 'geometry',
    practiceQuestionIds: ['q9-7', 'q9-8'],
    xpReward: 50
  }
];
