const imgInput = document.querySelector('input');
const imgEl = document.querySelector('img');
imgInput.addEventListener('change', () => {
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            imgEl.src = e.target.result;
        }

        reader.readAsDataURL(imgInput.files[0]);
    }
})

/* FILTERS */

$(document).ready(function(){
    $(".range").change(add_filter).mousemove(add_filter);
});
	
function add_filter(){
    let grayscale_val=$("#grayscale").val();
    let blur_val=$("#blur").val();
    let brightness_val=$("#brightness").val();
    let sepia_val=$("#sepia").val();
    let saturate_val=$("#saturate").val();
    let invert_val=$("#invert").val();
    let contrast_val=$("#contrast").val();

    $("img").css("-webkit-filter","grayscale("+grayscale_val+"%) blur("+blur_val+"px) brightness("+brightness_val+"%) sepia("+sepia_val+"%) saturate(" + saturate_val + "%)invert(" + invert_val + "%) contrast("+contrast_val+"%)");
};