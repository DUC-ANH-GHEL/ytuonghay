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
      tags: ['howto', 'mở đầu', 'giá trị']
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
      tags: ['khẩn cấp', 'giới hạn', 'gây sốc']
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
      tags: ['cá nhân hóa', 'tò mò', 'cảm xúc']
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
      tags: ['phản hồi', 'tin cậy', 'cảm xúc']
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
      tags: ['thừa nhận', 'bài học', 'cảm xúc']
    }, 
    {
      id: '6',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      title: 'Câu chuyện thành công',
      desc: 'Chia sẻ các câu chuyện thành công của người khác, không phải bạn.',
      examples: [
        'Một vụ tại nạn ô tô đã cướp đi khả năng đi lại của anh A, nhưng không phải là khả năng thành công của anh ấy.',
        'Ước mơ của bà đã bị trì hoãn hàng chục năm nhưng cuối cùng ở tuổi 68, bà đã đạt được nó.',
        'Sau khi vượt qua cơn nghiện, B đã tìm ra con đường đúng để có thể dẫn đến thành công.'
      ],
      note: 'Những câu chuyện kể về 1 người vượt qua nghịch cảnh sẽ truyền cảm hứng và thu hút mọi người. Chú ý đến tính xác thực của các câu chuyện',
      tags: ['truyền cảm hứng', 'vượt khó', 'cảm xúc']
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
      tags: ['sản phẩm', 'trải nghiệm', 'cảm xúc']
    },
    {
      id: '8',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135792.png',
      title: 'Tư duy khó sang dễ',
      desc: 'Xác thực sự hoài nghi/thờ ơ ban đầu của khán giả để xây dựng niềm tin, trước khi chuyển đổi tư duy của họ từ khó sang dễ.',
      examples: [
        'Tôi chưa bao giờ bận tâm đến thói quen buổi sáng... Cho đến khi thói quen đơn giản điên rồ này đã thay đổi mọi thứ.',
        'Đầu tư chứng khoán khiến tôi cảm thấy quá rủi ro... Nhưng ứng dụng đơn giản này đã giúp tôi bắt đầu một cách an toàn.'
      ],
      note: 'Hiểu rõ được khán giả bạn đang hướng tới, nắm được tư duy, niềm tin hạn chế đang tồn tại trong họ từ trước đến nay để phá bỏ nó',
      tags: ['niềm tin', 'chuyển đổi', 'cảm xúc']
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
      tags: ['bất ngờ', 'drama', 'tò mò']
    },
    {
      id: '10',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135820.png',
      title: 'Mới lạ, đột phá',
      desc: 'Một điều gì đó mới/vượt trội/đột phá',
      examples: [
        'Công thức mới làm kim chi này sẽ khiến bạn không thể cưỡng lại được.',
        'Cách ăn mặc mới này sẽ giúp bạn siêu thu hút đổi với các cô gái.',
        'Đây là chiếc bàn trải điện có công nghệ A đột phá nhất trên thị trường.'
      ],
      note: 'Tạo sự tò mò cho người xem về một điều gì đó mới, đột phá',
      tags: ['mới lạ', 'đột phá', 'tò mò']
    },
    {
      id: '11',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135816.png',
      title: 'Khám phá chưa ai biết đến ',
      desc: 'Chia sẽ những thứ chưa được nhiều người khám phá',
      examples: [
        '03 ứng dụng năng suất ít được biết đến này là những ứng dụng cần phải có đối với những chuyên gia bận rộn.',
        '03 tiện ích mở rộng trình duyệt chưa được chú ý này là những yếu tố thay đổi cuộc chơi về năng suất.',
        'Đây là cách kiếm tiền online thông minh nhưng ít người biết đến.'
      ],
      note: 'Tận dụng sức hấp dẫn của sự khan hiếm để khiến người xem có cảm giác nằm trong số ít những người độc quyền "biết rõ.',
      tags: ['khám phá', 'hiếm', 'tò mò']
    },
    {
      id: '12',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png',
      title: 'Hành trình truyền cảm hứng',
      desc: 'Mở đầu bằng cách chia sẻ về hành trình thay đổi bản thân của bạn',
      examples: [
        'Tôi đã vượt qua sự nhút nhát để trở thành một diễn giả tự tin trước công chúng như thế nào?',
        'Sự thay đổi tư duy này đã đưa tôi từ tình trạng kiệt sức, mất phương hướng, trở thành một doanh nhân thành đạt.',
        'Hành trình của tôi từ phá sản đến khi trả hết nợ và đạt được tự do tài chính.'
      ],
      note: 'Chia sẻ trải nghiệm của chính bản thân bạn khi vượt qua khó khăn, hoặc thực hiện thử thách sẽ có sức thu hút vô cùng lớn với người khác.',
      tags: ['truyền cảm hứng', 'hành trình', 'vượt khó']
    },
    {
      id: '13',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135802.png',
      title: 'Quan điểm gây tranh cãi',
      desc: 'Chia sẻ quan điểm cá nhân gây tranh cãi, khiêu khích người khác, nhấn mạnh vào yếu tố tranh cãi',
      examples: [
        'Món đồ tôi đang cầm trên tay sẽ là thứ hữu ích nhất bạn mua được trong 2025',
        'Xếp hạng 05 trường đại học vô dụng nhất Việt Nam',
        'Các bậc cha mẹ đang phạm một sai lầm lớn khi bảo vệ con khỏi điều này.'
      ],
      note: 'Khai thác sự phẫn nộ, bất đồng và các ý kiến mạnh mẽ sẽ làm tăng tính lan truyền. Nhưng cần khéo léo sử dụng nếu không sẽ phản tác dụng ngược.',
      tags: ['tranh cãi', 'gây sốc', 'viral']
    },
    {
      id: '14',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135812.png',
      title: 'Ma thuật bị cấm',
      desc: 'Chia sẽ những kiến thức có vẻ bí mật, bị cấm, bị hạn chế không cho nhiều người tiếp cận',
      examples: [
        'Tiết lộ những chiến thuật giảm cân mà các huấn luyện viên cá nhân đã bí mật sử dụng.',
        'Tăng cường trao đổi chất của bạn với thủ thuật bí mật mà các huấn luyện viên cá nhân luôn giấu cho riêng mình.'
      ],
      note: 'Mong muốn trở thành "người trong cuộc" để biết được những kiến thức bị cấm luôn có sức hấp dẫn mạnh mẽ.',
      tags: ['bí mật', 'bị cấm', 'hiếm']
    },
    {
      id: '15',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135786.png',
      title: 'Dễ dàng, nhanh chóng',
      desc: 'Khiến mọi thứ đơn giản, dễ dàng',
      examples: [
        'Lập kế hoạch tài chính một cách dễ dàng bằng cách sau.',
        'Dễ dàng mua nhà ở tuổi 30 với các kỹ năng sau',
        'Khám phá cách tạo một trang web chuyên nghiệp một cách dễ dàng chỉ bằng vài bước sau.'
      ],
      note: 'Tạo hứng thú và tò mò lớn cho người xem khi hứa hẹn về một cách dễ dàng để giải quyết các vấn đề.',
      tags: ['dễ dàng', 'giải pháp', 'tò mò']
    },
    {
      id: '16',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135782.png',
      title: 'Kết quả to, công sức nhỏ',
      desc: 'Đạt được kết quả lớn với nguồn lực thấp, nhờ vào một điều gì đó',
      examples: [
        'Thành thạo tiếng Anh chỉ sau 03 tháng nhờ bí quyết này',
        'Chỉ mất 07 ngày tán đổ crush của bạn nhờ các hành động sau',
        'Răng trắng hơn nhiều lần chỉ sau 01 tháng sử dụng sản phẩm này.'
      ],
      note: 'Đánh vào tâm lí thích sự dễ dàng của người xem, khiến họ tò mò vội ấn vào xem để tìm ra giải pháp.',
      tags: ['hiệu quả', 'dễ dàng', 'tò mò']
    },
    {
      id: '17',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135784.png',
      title: 'Thứ tốt nhất từng biết',
      desc: 'Một thứ gì nhất, mà mình/bạn từng biết',
      examples: [
        'Đây là quán ăn ngon nhất mà mình từng biết.',
        'Loại nước hoa dùng cuốn hút nhất mà mình từng biết.',
        'Đây là cách nhanh nhất để học tiếng Anh mà bạn từng biết.'
      ],
      note: 'Nhấn mạnh vào từ "nhất" trong tâm trí người xem, tạo sự tò mò lớn khiến họ ngay lập tức xem đến cuối để biết.',
      tags: ['nhất', 'tò mò', 'so sánh']
    },
    {
      id: '18',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135788.png',
      title: 'Hiểu sai và sự thật',
      desc: 'Nhận định sai (theo chiều hướng tiêu cực) - Phát hiện ra sự thật (theo chiều hướng tích cực)',
      examples: [
        'Bạn bè mình đều nghĩ chai nước hoa này giá vài triệu - nhưng khi biết giá của nó, đa phần đều sốc',
        'Bạn cho rằng trượt đại học là thất bại - Nhưng thực ra đây là một cơ hội để bứt phá.'
      ],
      note: 'Tạo ra một câu chuyện lôi kéo sự chú ý bằng cách sử dụng sự đối lập giữa nhận định sai - đúng',
      tags: ['so sánh', 'bất ngờ', 'tò mò']
    },
    {
      id: '19',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135790.png',
      title: 'Tại sao? Tìm hiểu ngay',
      desc: 'Đặt câu hỏi với từ "tại sao" để thu hút người xem.',
      examples: [
        'Tại sao quyển sách này lại bán hết 01 triệu bản chỉ trong 03 tháng?',
        'Tại sao chúng ta nên quan tâm đến sự biến đổi khí hậu?',
        'Tại sao cần học tiếng  Trung ngay lập tức?'
      ],
      note: 'Tạo sự tò mò, kích thích tư duy phân tích rồi tự trả lời của người xem và sau đó họ sẽ muốn xem đến cuối để biết kết quả.',
      tags: ['câu hỏi', 'tò mò', 'phân tích']
    },
    {
      id: '20',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135794.png',
      title: 'Thử thách trí tuệ',
      desc: 'Đưa ra các câu hỏi hoặc tình huống đánh đố để thử thách người xem',
      examples: [
        'Trả lời 07 câu hỏi này để xem bạn có tố chất trở thành nahf lãnh đạo không?',
        'Trả lời 05 tình huống sau xem bạn có vượt qua được nếu bị lạc trong rừng không?',
        'Cách bạn trả lời 10 câu hỏi sau sẽ biết được bạn có phải người hấp dẫn không?'
      ],
      note: 'Đánh vào lòng hiếu thắng của con người muốn thử thách và vượt qua khó khăn, nên người xem rất dễ xem tiếp để biết kết quả.',
      tags: ['thử thách', 'đánh đố', 'tò mò']
    },
  ]; 