// Dữ liệu các lá bài
export const cards = [
    {
      id: 1,
      title: 'How to?',
      description: 'Cách, làm thế nào để làm một điều gì đó.',
      examples: [
        'Cách để xây dựng 01 trang web chuyên nghiệp từ đầu chỉ trong 30 phút.',
        'Cách để học một ngoại ngữ bất kì trong vòng 03 tháng.',
        'Làm thế nào để xây một kênh Tiktok đạt 100.000 người theo dõi.'
      ],
      note: 'Thu hút sự chú ý người xem ngay lập tức bằng câu hỏi và sự tò mò, cho người xem biết được giá trị sẽ nhận đuôc',
      img: 'https://cdn-icons-png.flaticon.com/512/1827/1827933.png',
      tags: ['mở đầu', 'cảm xúc']
    },
    {
      id: '2',
      img: 'https://cdn-icons-png.flaticon.com/512/2972/2972543.png',
      title: 'Nhanh tay, kẻo hết',
      desc: 'Đưa ra một giới hạn về thời gian/số lượng/địa điểm.',
      examples: [
        'Giảm giá 50% duy nhất hôm nay.',
        '100 đơn hàng đầu tiên được giảm giá 50%.',
        '30 phút nữa sau khi mọi người đọc xong mình sẽ xóa nội dung bài viết này để tránh lan truyền.'
      ],
      note: 'Đánh mạnh vào cảm giác bị bỏ lỡ của người xem, khiến họ ngay lập tức xem kĩ nội dung.',
      tags: ['mở đầu', 'sốc']
    },
    {
      id: '3',
      img: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
      title: 'Bạn biết chưa?',
      desc: 'Đặt câu hỏi trong đó có từ "bạn".',
      examples: [
        'Bạn có biết cách tán đổ một cô gái/chàng trai trong vòng 03 ngày làm quen không?',
        'Bạn có bao giờ tự hỏi, tại sao luôn có người thành công hơn rất nhiều người khác?',
        'Bạn có đang mắc những thói quen xấu của những người thất bại sau đây?'
      ],
      note: 'Tạo ra sự tò mò ở phần câu hỏi thứ vị, và đặt người xem vào bối cảnh bằng từ "bạn" để tạo ra sự thân thuộc đồng cảm.',
      tags: ['cảm xúc']
    },
    {
      id: '4',
      img: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
      title: 'Trả lời bình luận tiêu cực',
      desc: 'Đề cập đến 01 câu hỏi hoặc 01 bình luận tiêu cực, sau đó khéo léo trả lời.',
      examples: [
        '"Hàng xấu thế, đừng mua phí tiền", ok đây là bình luận của bạn A, hôm nay mình sẽ trả lời.',
        '"Lừa đảo nhé đừng mua", hôm nay mình sẽ trả lời bình luận này.'
      ],
      note: 'Tạo sự đồng cảm, kết nối cho người xem, tạo độ tin cậy thực tế, tạo độ tự nhiên cho nội dung.',
      tags: ['cảm xúc']
    },
    {
      id: '5',
      img: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
      title: 'Thừa nhận và học từ sai lầm.',
      desc: 'Thừa nhận một nhược điểm của bản thân sau đó chia sẻ bài học.',
      examples: [
        'Đây là sai lầm nghiêm trọng đã suýt hủy hoại sự nghiệp của mình, bây giờ mình sẽ chia sẻ cho bạ và bài học từ nó.',
        'Mình là một kẻ thất bại trong tình cảm vì mắc những sai lầm sau.',
        'Đây là nhược điểm lớn nhất của chiếc điện thoại này mà bạn cần phải biết.'
      ],
      note: 'Tạo sự kết nối, đồng cảm và lấy niềm tin với người xem khi thừa nhận nhược điểm nào đó, vì không ai muốn nói về nhược điểm.',
      tags: ['cảm xúc']
    }, 
    {
      id: '6',
      img: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
      title: 'Câu chuyện thành công',
      desc: 'Chia sẻ các câu chuyện thành công của người khác, không phải bạn.',
      examples: [
        'Một vụ tại nạn ô tô đã cướp đi khả năng đi lại của anh A, nhưng không phải là khả năng thành công của anh ấy.',
        'Ước mơ của bà đã bị trì hoãn hàng chục năm nhưng cuối cùng ở tuổi 68, bà đã đạt được nó.',
        'Sau khi vượt qua cơn nghiện, B đã tìm ra con đường đúng để có thể dẫn đến thành công.'
      ],
      note: 'Những câu chuyện kể về 1 người vượt qua nghịch cảnh sẽ truyền cảm hứng và thu hút mọi người. Chú ý đến tính xác thực của các câu chuyện',
      tags: ['cảm xúc']
    },
    {
      id: '7',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      title: 'Sản phẩm thay đổi cuộc sống',
      desc: 'Đưa tên sản phẩm/dịch vụ vào câu mở đầu và nói về việc nó đã thay đổi cuộc sống của bạn/người khác',
      examples: [
        'Chiếc máy hút bụi với công nghệ hiện đại này đã thay đổi cuộc sống của chúng mình.',
        'Khóa học cấp tốc tiếng anh dành cho người lớn sẽ giúp bạn thành thạo tiếng Anh sau 03 tháng.',
        'Ghế massage thương hiệu A này sẽ giúp cơ thể bạn hết mệt mỏi sau một ngày làm việc..'
      ],
      note: 'Đơn giản trực quan, đề cập thẳng đến vấn đề và thông tin cho người xem.',
      tags: ['cảm xúc']
    },
    {
      id: '8',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135792.png',
      title: 'Tư duy khó sang dễ',
      desc: 'Xác thực sự hoài nghi/thờ ơ ban đầu của khán giả để xây dựng niềm tin, trước khi chuyển đổi tư duy của họ từ khó sang dễ.',
      examples: [
        'Tôi chưa bao giờ bận tâm đến thói quen buổi sáng... Cho đến khi thói quen đơn giairn điên rồ này đã thay đổi mọi thứ.',
        'Đầu tư chứng khoán khiến tôi cảm thấy quá rủi ro... Nhưng ứng dụng đơn giản này đã giúp tôi bắt đầu một cách an toàn.'
      ],
      note: 'Hiểu rõ được khán giả bạn đang hướng tới, nắm được tư duy, niềm tin hạn chế đang tồn tại trong họ từ trước đến nay để phá bỏ nó',
      tags: ['cảm xúc']
    },
    {
      id: '9',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135773.png',
      title: 'Sự kiện tiêu cực bất ngờ',
      desc: 'Mọi thứ tưởng chừng đang thuận lợi nhưng có một điều bất ngờ xảy ra.',
      examples: [
        'Tôi từng là một vận động viên ưu tú... cho đến khi sự cố gây sốc này đã thay đổi mọi thứ.',
        'Trong nhiều năm, tôi đã rao giảng về tự do tài chính nhưng sau đó tôi đã đánh mất tất cả chỉ trong chốc lát.',
        'Anh B đã xây dựng một đế chế bất động sản từ con số không, rồi mất tất cả trong một vụ lừa đảo không thể tưởng tượng được.'
      ],
      note: 'Yếu tố bất ngờ không thể đoán trước sẽ kích thích sự tò mò muốn tìm hiểu thêm. Đây là một cách kể chuyện vô cùng mạnh mẽ.',
      tags: ['cảm xúc']
    },
  ]; 