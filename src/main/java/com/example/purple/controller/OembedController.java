package com.example.purple.controller;

import ac.simons.oembed.OembedResponse;
import ac.simons.oembed.OembedService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@Controller
@RequestMapping("/api")
@RequiredArgsConstructor
public class OembedController {

    private final OembedService oembedService;

    @ResponseBody
    @GetMapping("/oembed")
    public Optional<OembedResponse> getOembedResponse(
            @RequestParam String url
    ) {

        Optional<OembedResponse> response = oembedService.getOembedResponseFor(url);

        log.info("response : {}", response.isPresent());
        return response;
    }
}
